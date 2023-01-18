import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AuthApiService } from './auth-api.service';

@Injectable()
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private readonly _authApiService: AuthApiService) {
    const token = localStorage.getItem('auth_token');
    this._isLoggedIn$.next(!!token);
  }

  login(
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
