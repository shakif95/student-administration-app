import { TestBed } from '@angular/core/testing';
import { SeedStudents } from './student.data';
import { Student } from './student.model';

import { StudentService } from './student.service';

describe('StudentService', () => {
  let service: StudentService;
  let student: Student;
  let students: Student[];
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentService);
    student = {
      ects: 100,
      firstName: 'john',
      lastName: 'doe',
      matriculation: 123456,
      semester: 1,
      status: 'Graduated',
    };
    students = SeedStudents;
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add student sucessfully', () => {
    service.add(student);
    expect(JSON.parse(localStorage.getItem('students')).length).toBe(3);
  });

  it('should remove student sucessfully', () => {
    service.add(student);
    expect(JSON.parse(localStorage.getItem('students')).length).toBe(3);

    const toBeRemovedStudent = students[2];
    service.remove(toBeRemovedStudent.id);
    expect(JSON.parse(localStorage.getItem('students')).length).toBe(2);
  });

  it('should get all the students sucessfully', () => {
    service.getAll().subscribe(
      retrievedStudents => expect(retrievedStudents).toBe(students)
    );
  });

  it('should update student sucessfully', () => {
    const toBeUpdatedStudent = {
      ...students[2],
      matriculation: 555555
    }

    service.update(toBeUpdatedStudent);

    expect(JSON.parse(localStorage.getItem('students'))[1].id).toBe(toBeUpdatedStudent.id);
    expect(JSON.parse(localStorage.getItem('students'))[1].matriculation).toBe(toBeUpdatedStudent.matriculation);
  });
});
