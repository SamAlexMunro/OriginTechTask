import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from "@angular/core";
import { TodoService } from "./../../services/todo.service";

@Component({
  selector: "app-add-new-todo-item",
  templateUrl: "./add-new-todo-item.component.html",
  styleUrls: ["./add-new-todo-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddNewTodoItemComponent {
  @Output() closePane = new EventEmitter<void>();

  constructor(private readonly todoService: TodoService) {}

  addNewTodo(description: string): void {
    this.todoService.addNewTodo(description);
    this.closePane.emit();
  }

  cancel(): void {
    this.closePane.emit();
  }
}
