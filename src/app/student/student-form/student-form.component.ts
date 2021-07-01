import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  @Input() student: Student;
  @Output() cancelForm = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private studentService: StudentService) {
    
    this.form = this.formBuilder.group(
      {
        id: null,
        matriculation: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        ects: ['', Validators.required],
        status: ['Enrolled', Validators.required],
        semester: ['', Validators.required]
      }
    )
   }

  ngOnInit(): void {
    this.form.setValue({
      id: this.student.id ?? null,
      firstName: this.student.firstName,
      lastName: this.student.lastName,
      status: this.student.status,
      semester: this.student.semester === 0 ? '' : this.student.semester,
      ects: this.student.ects === 0 ? '' : this.student.ects,
      matriculation: this.student.matriculation === 0 ? '' : this.student.matriculation
    });
  }

  get formData(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit = (): void => {
    this.submitted = true;
    
    if (this.form.invalid) {
      return;
    }
    
    const student: Student = this.form.value;
    if(this.student.id){
      this.studentService.update({
        ...student,
        id: this.student.id
      });
    }else{
      this.studentService.add(student);
    }
    window.location.reload(); // had to force it because of reading data from localStorage
  }

  onCancel = () => {
    //@ts-ignore
    this.cancelForm.emit(false);
  }

}
