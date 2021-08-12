import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
  ViewChild,
} from "@angular/core";
import { fromEvent, ReplaySubject } from "rxjs";
import { debounceTime, distinctUntilChanged, takeUntil } from "rxjs/operators";
import { UserEvent } from "../../enums/user-events";
import { TodoService } from "./../../services/todo.service";

@Component({
  selector: "app-todo-utility-bar",
  templateUrl: "./todo-utility-bar.component.html",
  styleUrls: ["./todo-utility-bar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoUtilityBarComponent implements OnDestroy {
  addNewTodoPaneVisible = false;
  @Output() filtering = new EventEmitter<boolean>(false);
  @ViewChild("filter") filter: ElementRef<HTMLInputElement>;
  private readonly destroy$ = new ReplaySubject<void>(1);

  constructor(private readonly todoService: TodoService) {}

  toggleAddNewTodo(): void {
    this.addNewTodoPaneVisible = !this.addNewTodoPaneVisible;
  }

  ngAfterViewInit() {
    this.setupFilter();
  }

  setupFilter(): void {
    fromEvent(this.filter.nativeElement, UserEvent.KEYUP)
      .pipe(debounceTime(150), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe(() => {
        this.todoService.filterList(this.filter.nativeElement.value);
        this.filtering.emit(
          this.filter.nativeElement.value.length > 1 ? true : false
        );
      });
  }

  clearFilter() {
    this.todoService.filterList("");
    this.filtering.emit(false);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
