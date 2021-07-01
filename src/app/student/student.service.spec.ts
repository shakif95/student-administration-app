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
    localStorage.setItem('students', JSON.stringify(students));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all the students sucessfully', () => {
    service.getAll().subscribe(
      retrievedStudents => expect(retrievedStudents).toEqual(students)
    );
  });

  it('should remove student sucessfully', () => {
    const count = JSON.parse(localStorage.getItem('students')).length;
    service.add(student);
    expect(service.students.length).toBe(count+1);

    const toBeRemovedStudent = students[1];
    service.remove(toBeRemovedStudent.id);
    expect(service.students.length).toBe(count);
  });

  it('should add student sucessfully', () => {
    service.add(student);
    expect(JSON.parse(localStorage.getItem('students')).length).toBe(3);
  });

  it('should update student sucessfully', () => {
    const firstStudent = service.students[0];
    const toBeUpdatedStudent = {
      ...firstStudent,
      matriculation: 555555
    }

    service.update(toBeUpdatedStudent);
    const studentAfterUpdate = service.students.find(student => student.id === toBeUpdatedStudent.id);
    expect(studentAfterUpdate.id).toBe(toBeUpdatedStudent.id);
    expect(studentAfterUpdate.matriculation).toBe(toBeUpdatedStudent.matriculation);
  });
});
