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
  constructor(private readonly todoService: TodoService) {}
}
