import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-todo-utility-bar",
  templateUrl: "./todo-utility-bar.component.html",
  styleUrls: ["./todo-utility-bar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoUtilityBarComponent {
  addNewTodoPaneVisible = false;

  toggleAddNewTodo(): void {
    this.addNewTodoPaneVisible = !this.addNewTodoPaneVisible;
  }
}
