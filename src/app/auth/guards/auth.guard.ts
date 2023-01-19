import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) {}
  canActivate(): Observable<boolean> {
    return this._authService.isLoggedIn$.pipe(
      tap((isLoggedIn) => {
        if (!isLoggedIn) {
          this._router.navigate(['login']);
        }
      })
    );
  }
}
