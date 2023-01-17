import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';

interface loginDTO {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private readonly _authService: AuthService) {}

  ngOnInit(): void {}

  get formValue(): loginDTO {
    return this.loginForm.value;
  }

  public onLogin() {
    this._authService
      .login(this.formValue.username, this.formValue.password)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
