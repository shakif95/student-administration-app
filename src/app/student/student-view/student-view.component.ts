import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StudentViewComponent implements OnInit {
  @Input() student: Student;
  editableStudent: Student;
  showEditForm = false;
  panelOpenState = false;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  onEdit = () => {
    this.editableStudent = this.student;
    this.showEditForm = true;
  }

  onDelete = (id: number) => {
    this.studentService.remove(id);
    window.location.reload();
  }

  onCancel = (close: boolean) => {
    this.showEditForm = close;
  }

}
