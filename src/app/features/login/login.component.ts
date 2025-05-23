import { Component, ViewEncapsulation } from '@angular/core';
import { AuthInputComponent } from "../../shared/components/auth/auth-input/auth-input.component";
import { AuthButtonComponent } from "../../shared/components/auth/auth-button/auth-button.component";
import { AuthPasswordInputComponent } from "../../shared/components/auth/auth-password-input/auth-password-input.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  encapsulation: ViewEncapsulation.None,
  imports: [AuthInputComponent, RouterLink, AuthButtonComponent, AuthPasswordInputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
