import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<{ authToken: string }> {
    return this.http.post<{ authToken: string }>(
      'http://localhost:3000/auth/login',
      {
        username,
        password,
      }
    );
  }
}
