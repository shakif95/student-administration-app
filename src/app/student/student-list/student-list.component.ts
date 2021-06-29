import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  title="Students"
  showStudentForm = false;
  students: Student[] = [
    {
      id: 1,
      matriculation: 123456,
      firstName: 'John',
      lastName: 'Doe',
      ects: 125,
      semester: 6,
      status: 'Enrolled'
    },
    {
      id: 2,
      matriculation: 987654,
      firstName: 'Alex',
      lastName: 'Farguson',
      ects: 210,
      semester: 9,
      status: 'Graduated'
    }
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

  onClickAdd = () => {
    this.showStudentForm = true;
  }
}
