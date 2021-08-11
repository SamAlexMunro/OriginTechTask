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

export interface TodoAlt {
  category: string;
  description: string;
  done: boolean;
  id: number;
  label: string;
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

  /**
   * My apologies for some reason I overlooked the server side, and only noticed
   * it when I went back and updated the readme at the end. Hopefully the
   * code below and above will still suffice and give a decent representaion
   * on how I'd handle dealing with the HTTP requests, given more time
   * I'd add a catchError observable handler into this.
   */

  // URL = `http://localhost:3000/tasks`;
  // readonly $todoListHttp = new BehaviorSubject<TodoAlt[]>([]);

  // constructor(private readonly http: HttpClient) {
  //   this.getTodoItems().pipe(take(1)).subscribe();
  // }

  // getTodoItems(): Observable<void> {
  //   return this.http.get(this.URL).pipe(
  //     take(1),
  //     map((data) => {
  //       this.$todoListHttp.next([...(data as [])]);
  //     })
  //   );
  // }

  // addNewTodoItem(todoItem: TodoAlt): void {
  //   this.http
  //     .post(this.URL, todoItem)
  //     .pipe(
  //       take(1),
  //       mergeMap(() => this.getTodoItems())
  //     )
  //     .subscribe();
  // }

  // updateTodoItem(newTodoItem: TodoAlt, id: string | number): void {
  //   this.http
  //     .patch(`${this.URL}/${id}`, newTodoItem)
  //     .pipe(
  //       take(1),
  //       mergeMap(() => this.getTodoItems())
  //     )
  //     .subscribe();
  // }

  // deleteTodoItem(id: string | number): void {
  //   this.http
  //     .delete(`${this.URL}/${id}`)
  //     .pipe(
  //       take(1),
  //       mergeMap(() => this.getTodoItems())
  //     )
  //     .subscribe();
  // }
}
