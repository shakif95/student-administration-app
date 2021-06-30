import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Student Administration';
  username = "Admin";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onSignOut = (): void => {
    this.authService.signOut();
    this.router.navigate(['/signin']);
  }
}
