import { Component, input } from '@angular/core';
import { AuthInputComponent } from "../auth-input/auth-input.component";

@Component({
  selector: 'app-auth-connected-inputs',
  imports: [AuthInputComponent],
  templateUrl: './auth-connected-inputs.component.html',
  styleUrl: './auth-connected-inputs.component.scss'
})
export class AuthConnectedInputsComponent {
  firstInputId = input.required<string>();
  firstInputLabel = input.required<string>();
  firstInputPlaceholder = input.required<string>();
  firstInputType = input<string>('text');
  
  secondInputId = input.required<string>();
  secondInputLabel = input.required<string>();
  secondInputPlaceholder = input.required<string>();
  secondInputType = input<string>('text');
}
