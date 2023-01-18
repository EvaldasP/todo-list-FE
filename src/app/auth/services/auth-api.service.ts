import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthApiService {
  constructor(private readonly _http: HttpClient) {}

  login(
    username: string,
    password: string
  ): Observable<{ access_token: string }> {
    return this._http.post<{ access_token: string }>(
      'http://localhost:3000/auth/login',
      {
        username,
        password,
      }
    );
  }
}
