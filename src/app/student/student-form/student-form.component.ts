import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group(
      {
        matriculation: ['', Validators.required, Validators.minLength(6), Validators.pattern('/^\d+$/')],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        ects: ['', Validators.required, Validators.pattern('/^\d+$/')],
        status: ['Enrolled', Validators.required],
        semester: ['', Validators.required, Validators.pattern('/^\d+$/')]
      }
    )
   }

  ngOnInit(): void {
  }

  get formData(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit = (): void => {
    this.submitted = true;
    
    if (this.form.invalid) {
      return;
    }
    
    // TODO: add service for saving username in localstorage
    console.log(JSON.stringify(this.form.value, null, 2));
  }

}
