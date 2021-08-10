import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface Todo {
  description: string;
  done: boolean;
  edit: boolean;
  toggleEdit: Function;
}

@Injectable({ providedIn: "root" })
export class TodoService {
  readonly $todoList = new BehaviorSubject<Todo[]>([]);

  addNewTodo(description: string): void {
    const todoClone = [...this.$todoList.value];
    todoClone.push({
      description,
      done: false,
      edit: false,
      toggleEdit: function () {
        this.edit = !this.edit;
      },
    });
    this.$todoList.next([...todoClone]);
  }

  removeTodo(todo: Todo): void {
    const todoClone = [...this.$todoList.value];
    todoClone.splice(todoClone.indexOf(todo), 1);
    this.$todoList.next([...todoClone]);
  }
}
