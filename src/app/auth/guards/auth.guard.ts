import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly _authService: AuthService,
    public router: Router
  ) {}
  canActivate(): Observable<boolean> {
    return this._authService.isLoggedIn$;
  }
}
