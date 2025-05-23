import { Component, ViewEncapsulation } from '@angular/core';
import { AuthInputComponent } from "../../shared/components/auth/auth-input/auth-input.component";
import { AuthPasswordInputComponent } from "../../shared/components/auth/auth-password-input/auth-password-input.component";
import { AuthTelInputComponent } from "../../shared/components/auth/auth-tel-input/auth-tel-input.component";
import { AuthButtonComponent } from "../../shared/components/auth/auth-button/auth-button.component";
import { RouterLink } from '@angular/router';
import { AuthConnectedInputsComponent } from "../../shared/components/auth/auth-connected-inputs/auth-connected-inputs.component";

@Component({
  selector: 'app-register',
  encapsulation: ViewEncapsulation.None,
  imports: [AuthInputComponent, AuthPasswordInputComponent, RouterLink, AuthTelInputComponent, AuthButtonComponent, AuthConnectedInputsComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
