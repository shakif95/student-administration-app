import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

import { AuthguardService } from './authguard.service';

describe('AuthguardService', () => {
  let service: AuthguardService;
  let routerMock = {navigate: jasmine.createSpy('navigate')};
  let route: ActivatedRouteSnapshot;
  let state: RouterStateSnapshot;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthguardService, { provide: Router, useValue: routerMock }
      ],
    });
    service = TestBed.inject(AuthguardService);
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return false on invalid username', () => {
    expect(service.canActivate(route, state)).toBeFalse();
  });

  it('should return true on valid username', () => {
    const username = JSON.parse(localStorage.getItem('auth'));
    if(!username){
      localStorage.setItem('auth', JSON.stringify({ username: 'testUser' }));
    }

    expect(service.canActivate(route, state)).toBeTrue();
  });
});
