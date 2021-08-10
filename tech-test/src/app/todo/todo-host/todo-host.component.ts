import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-todo-host",
  templateUrl: "./todo-host.component.html",
  styleUrls: ["./todo-host.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoHostComponent {}
