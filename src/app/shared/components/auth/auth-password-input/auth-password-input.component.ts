import { Component, input } from '@angular/core';

@Component({
  selector: 'app-auth-password-input',
  imports: [],
  templateUrl: './auth-password-input.component.html',
  styleUrl: './auth-password-input.component.scss'
})
export class AuthPasswordInputComponent {
  showPassword: boolean = false;

  label = input.required<string>();
  placeholder = input.required<string>();
  id = input.required<string>();

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
