import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  title="Students"
  showStudentForm = false;
  students: Student[] = [];
  newStudent: Student;

  constructor(
    private studentService: StudentService, 
    private authService: AuthService,
    private router: Router
  ) { 
    this.newStudent = {
      ects: 0,
      firstName: '',
      lastName: '',
      matriculation: 0,
      semester: 0,
      status: 'Enrolled'
    }
  }

  ngOnInit(): void {
    this.getStudents();
  }

  onClickAdd = () => {
    this.showStudentForm = true;
  }

  getStudents = () => {
    this.studentService.getAll()
      .subscribe(
        (data: Student[]) => this.students = data,
        error => console.log(error)
      )
  }
}
