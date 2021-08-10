import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TodoHostComponent } from "./todo-host.component";

describe("TodoHostComponent", () => {
  let component: TodoHostComponent;
  let fixture: ComponentFixture<TodoHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoHostComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
