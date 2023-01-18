import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthApiService } from './services/auth-api.service';
@NgModule({
  declarations: [LoginComponent],
  imports: [ReactiveFormsModule, HttpClientModule],
  providers: [AuthService, AuthApiService],
})
export class AuthModule {}
