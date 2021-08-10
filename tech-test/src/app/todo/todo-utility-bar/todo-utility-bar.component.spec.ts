import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TodoUtilityBarComponent } from "./todo-utility-bar.component";

describe("TodoUtilityBarComponent", () => {
  let component: TodoUtilityBarComponent;
  let fixture: ComponentFixture<TodoUtilityBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoUtilityBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoUtilityBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
