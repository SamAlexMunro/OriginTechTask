import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "./../button/button.module";
import { CardModule } from "./../card/card.module";
import { TodoHostComponent } from "./todo-host/todo-host.component";
import { TodoRoutingModule } from "./todo-routing.module";
import { TodoUtilityBarComponent } from './todo-utility-bar/todo-utility-bar.component';
import { AddNewTodoItemComponent } from './add-new-todo-item/add-new-todo-item.component';

@NgModule({
  declarations: [TodoHostComponent, TodoUtilityBarComponent, AddNewTodoItemComponent],
  imports: [CommonModule, CardModule, ButtonModule, TodoRoutingModule],
  exports: [TodoHostComponent],
})
export class TodoModule {}
