import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "./../button/button.module";
import { CardModule } from "./../card/card.module";
import { TodoHostComponent } from "./todo-host/todo-host.component";
import { TodoRoutingModule } from "./todo-routing.module";

@NgModule({
  declarations: [TodoHostComponent],
  imports: [CommonModule, CardModule, ButtonModule, TodoRoutingModule],
  exports: [TodoHostComponent],
})
export class TodoModule {}
