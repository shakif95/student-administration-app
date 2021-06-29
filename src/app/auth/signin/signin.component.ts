import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required]
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
