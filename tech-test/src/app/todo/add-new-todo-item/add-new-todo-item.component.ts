import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-add-new-todo-item",
  templateUrl: "./add-new-todo-item.component.html",
  styleUrls: ["./add-new-todo-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddNewTodoItemComponent {}
