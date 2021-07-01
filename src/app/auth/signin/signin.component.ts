import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../auth.model';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  
  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private router: Router
    ) {
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
    
    const auth: Auth = {
      username: this.form.value.username,
      password: this.form.value.password,
    }

    this.authService.signIn(auth);
    this.router.navigate(['/dashboard']);
  }

}
