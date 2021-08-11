import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Todo, TodoService } from "./../../services/todo.service";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent {
  @Input() todoItem: Todo;

  constructor(private readonly todoService: TodoService) {}

  removeTodo(todoItem: Todo) {
    this.todoService.removeTodo(todoItem);
  }
}
