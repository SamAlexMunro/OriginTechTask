import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "./../button/button.module";
import { CardModule } from "./../card/card.module";
import { AddNewTodoItemComponent } from "./add-new-todo-item/add-new-todo-item.component";
import { TodoHostComponent } from "./todo-host/todo-host.component";
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { TodoRoutingModule } from "./todo-routing.module";
import { TodoUtilityBarComponent } from "./todo-utility-bar/todo-utility-bar.component";

@NgModule({
  declarations: [
    AddNewTodoItemComponent,
    TodoHostComponent,
    TodoItemComponent,
    TodoUtilityBarComponent,
  ],
  imports: [
    ButtonModule,
    CardModule,
    CommonModule,
    FormsModule,
    TodoRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [TodoHostComponent],
})
export class TodoModule {}
