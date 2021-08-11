import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface Todo {
  description: string;
  done: boolean;
  edit: boolean;
  toggleEdit: Function;
  update: Function;
  markAsDone: Function;
}

@Injectable({ providedIn: "root" })
export class TodoService {
  readonly $todoList = new BehaviorSubject<Todo[]>([]);
  private readonly $todoList_ = new BehaviorSubject<Todo[]>([]);

  addNewTodo(description: string): void {
    const todoClone = [...this.$todoList.value];
    todoClone.push({
      description,
      done: false,
      edit: false,
      toggleEdit: function () {
        this.edit = !this.edit;
      },
      update: function (value: string) {
        this.description = value;
        this.edit = false;
      },
      markAsDone: function () {
        this.done = !this.done;
      },
    });
    this.$todoList.next([...todoClone]);
    this.$todoList_.next([...todoClone]);
  }

  removeTodo(todo: Todo): void {
    const todoClone = [...this.$todoList.value];
    todoClone.splice(todoClone.indexOf(todo), 1);
    this.$todoList.next([...todoClone]);
    this.$todoList_.next([...todoClone]);
  }

  filterList(filterBy: string): void {
    const todoClone = [...this.$todoList_.value];
    this.$todoList.next([
      ...todoClone.filter((todoItem) =>
        todoItem.description.toLowerCase().includes(filterBy.toLowerCase())
      ),
    ]);
  }
}
