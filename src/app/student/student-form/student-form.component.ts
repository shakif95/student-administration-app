import { Component, Input, OnInit } from '@angular/core';
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
      id: this.student.id,
      firstName: this.student.firstName,
      lastName: this.student.lastName,
      status: this.student.status,
      semester: this.student.semester,
      ects: this.student.ects,
      matriculation: this.student.matriculation
    });
  }

  get formData(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit = (): void => {
    this.submitted = true;
    
    if (this.form.invalid) {
      console.log(this.formData);
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
    console.log(JSON.stringify(this.form.value, null, 2));
    window.location.reload(); // had to force it because reading data from localStorage
  }

}
