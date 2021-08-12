import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TodoService } from "./../../services/todo.service";

@Component({
  selector: "app-todo-host",
  templateUrl: "./todo-host.component.html",
  styleUrls: ["./todo-host.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoHostComponent {
  readonly $todoList = this.todoService.$todoList;
  filtering = false;
  constructor(private readonly todoService: TodoService) {}

  updateFilteringProperty(filtering: boolean) {
    this.filtering = filtering;
  }
}
