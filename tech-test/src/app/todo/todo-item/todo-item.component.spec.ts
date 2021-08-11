import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { TodoService } from "./../../services/todo.service";
import { TodoItemComponent } from "./todo-item.component";

const MOCK_TODO_SERVICE = {
  removeTodo: () => {},
};

const MOCK_TODO_ITEM = {
  description: "description",
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
};

enum Method {
  ADD_NEW_TODO = "removeTodo",
}

enum Attribute {
  CANCEL_BUTTON = "[origin-button-cancel]",
}

describe("TodoItemComponent", () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoItemComponent],
      providers: [{ provide: TodoService, useValue: MOCK_TODO_SERVICE }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    component.todoItem = MOCK_TODO_ITEM;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("removeTodo() should", () => {
    it("call the todoService.removeTodo() when clicked", () => {
      spyOn(component, Method.ADD_NEW_TODO).and.callThrough();
      spyOn(MOCK_TODO_SERVICE, Method.ADD_NEW_TODO);
      const removeTodoButton = debugElement.queryAll(
        By.css(Attribute.CANCEL_BUTTON)
      )[0];
      removeTodoButton.nativeElement.click();
      expect(component.removeTodo).toHaveBeenCalled();
      expect(MOCK_TODO_SERVICE.removeTodo).toHaveBeenCalled();
    });
  });
});
