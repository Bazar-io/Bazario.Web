import { Component, input } from '@angular/core';

@Component({
  selector: 'app-auth-input',
  imports: [],
  templateUrl: './auth-input.component.html',
  styleUrl: './auth-input.component.scss'
})
export class AuthInputComponent {
  type = input<string>('text');
  label = input.required<string>();
  placeholder = input.required<string>();
  id = input.required<string>();
}
