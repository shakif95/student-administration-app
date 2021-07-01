import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { getRandomId } from '../app.util';
import { Student } from './student.model';
import { SeedStudents } from './student.data';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // some example data to get started
  students = SeedStudents;

  constructor() {
    this.init();
  }

  init = () => {
    const students = localStorage.getItem('students');
    const parsedStudents = students ? JSON.parse(students) : null;
    
    if (parsedStudents) {
      this.students = parsedStudents;
    }
  }

  add = (student: Student) => {
    const newStudent = {
      ...student,
      id: getRandomId()
    }

    this.students = [
      ...this.students,
      newStudent
    ]

    localStorage.setItem('students', JSON.stringify(this.students));
  }

  remove = (id: number) => {
    this.students = this.students.filter((student: Student) => student.id !== id);

    localStorage.setItem('students', JSON.stringify(this.students));
  }

  getAll = (): Observable<Student[]> => {
    const students = localStorage.getItem('students');
    if (students) {
      this.students = JSON.parse(students);
    }

    return of(this.students);
  }

  update = (student: Student) => {
    const filteredStudent = this.students.find((_student: Student) => _student.id === student.id);
    this.remove(filteredStudent.id);
    this.students = [
      ...this.students,
      student
    ];

    localStorage.setItem('students', JSON.stringify(this.students));
  }

}
