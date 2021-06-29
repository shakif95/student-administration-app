import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StudentViewComponent implements OnInit {
  @Input() student: Student;

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
