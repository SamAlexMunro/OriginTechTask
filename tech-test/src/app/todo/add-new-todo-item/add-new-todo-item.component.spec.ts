import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { TodoService } from "./../../services/todo.service";
import { AddNewTodoItemComponent } from "./add-new-todo-item.component";

const MOCK_TODO_SERVICE = {
  addNewTodo: () => {},
};

enum Method {
  ADD_NEW_TODO = "addNewTodo",
}

enum Attribute {
  CANCEL_BUTTON = "[origin-button-cancel]",
  CONFIRM_BUTTON = "[origin-button-confirm]",
}

describe("AddNewTodoItemComponent", () => {
  let component: AddNewTodoItemComponent;
  let fixture: ComponentFixture<AddNewTodoItemComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNewTodoItemComponent],
      providers: [
        {
          provide: TodoService,
          useValue: MOCK_TODO_SERVICE,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewTodoItemComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("addNewTodo() should", () => {
    it("invoke the todoService.addNewTodo method", () => {
      spyOn(component, Method.ADD_NEW_TODO).and.callThrough();
      spyOn(MOCK_TODO_SERVICE, Method.ADD_NEW_TODO).and.callThrough();
      const addTodoButton = debugElement.query(
        By.css(Attribute.CONFIRM_BUTTON)
      );
      addTodoButton.nativeElement.click();
      expect(component.addNewTodo).toHaveBeenCalled();
      expect(MOCK_TODO_SERVICE.addNewTodo).toHaveBeenCalled();
    });
  });

  describe("cancel() should", () => {
    it("invoke the close eventEmiiter", () => {
      spyOn(component.closePane, "emit");
      spyOn(component, Method.ADD_NEW_TODO).and.callThrough();
      const addTodoButton = debugElement.query(By.css(Attribute.CANCEL_BUTTON));
      addTodoButton.nativeElement.click();
      expect(component.closePane.emit).toHaveBeenCalled();
    });
  });
});
