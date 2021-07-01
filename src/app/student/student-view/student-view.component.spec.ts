import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeedStudents } from '../student.data';

import { StudentViewComponent } from './student-view.component';

describe('StudentViewComponent', () => {
  let component: StudentViewComponent;
  let fixture: ComponentFixture<StudentViewComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentViewComponent);
    component = fixture.componentInstance;
    component.student = SeedStudents[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
