import { TestBed } from "@angular/core/testing";
import { TodoService } from "./todo.service";

describe("TodoService", () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  describe("$todoList should", () => {
    it("initialised to an empty todo array", () => {
      expect(service.$todoList.value).toEqual([]);
    });
  });

  describe("addNewTodo() should", () => {
    it("Add a new todo item into the todoList$ obs with the correct properties", () => {
      expect(service.$todoList.value).toEqual([]);
      service.addNewTodo("Example");
      const todoItem = service.$todoList.value[0];
      expect(todoItem.description).toBe("Example");
      expect(todoItem.edit).toBe(false);
      expect(todoItem.done).toBe(false);
    });
  });

  describe("removeTodo() should", () => {
    it("Remove the correct todo item from the todoList$ obs", () => {
      service.addNewTodo("Example");
      service.addNewTodo("Example2");
      expect(service.$todoList.value.length).toBe(2);
      service.removeTodo(service.$todoList.value[1]);
      expect(service.$todoList.value.length).toBe(1);
      expect(service.$todoList.value[0].description).toBe("Example");
    });
  });

  describe("$todoList.toggleEdit() should", () => {
    it("toggle the edit property accordingly", () => {
      service.addNewTodo("Example");
      const todo = service.$todoList.value[0];
      expect(todo.edit).toBeFalse();
      todo.toggleEdit();
      expect(todo.edit).toBeTruthy();
      todo.toggleEdit();
      expect(todo.edit).toBeFalse();
    });
  });

  describe("$todoList.update() should", () => {
    it("update the description property accordingly", () => {
      service.addNewTodo("Example");
      const todo = service.$todoList.value[0];
      expect(todo.description).toBe("Example");
      todo.update("New value");
      expect(todo.description).toBe("New value");
    });
  });
});
