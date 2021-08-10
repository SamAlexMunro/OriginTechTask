import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodoHostComponent } from "./todo-host/todo-host.component";

const routes: Routes = [
  {
    path: "",
    component: TodoHostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
