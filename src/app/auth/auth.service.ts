import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Auth } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  signIn = (auth: Auth) => {
    localStorage.setItem('auth', JSON.stringify(auth));
  }

  signOut = () => {
    localStorage.clear();
  }

  getUserName = (): Observable<string> => {
    const auth = localStorage.getItem('auth');
    if(!auth){
      throw new Error("no user exists"); 
    }

    return of(JSON.parse(auth).username);
  }

  isAuthenticated = () => {
    const auth = localStorage.getItem('auth');

    return auth !== null;
  }
}
