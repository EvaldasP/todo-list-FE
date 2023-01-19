import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AuthApiService } from './auth-api.service';

@Injectable()
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(
    private readonly _authApiService: AuthApiService,
    private readonly _jwtHelper: JwtHelperService
  ) {
    const token = localStorage.getItem('auth_token');

    try {
      this._isLoggedIn$.next(!this._jwtHelper.isTokenExpired(token));
    } catch (error) {
      localStorage.removeItem('auth_token');
      this._isLoggedIn$.next(false);
    }
  }

  public get subjectValue() {
    return this._isLoggedIn$.value;
  }

  public login(
    username: string,
    password: string
  ): Observable<{ access_token: string }> {
    return this._authApiService.login(username, password).pipe(
      tap((response) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem('auth_token', response.access_token);
      })
    );
  }
}
