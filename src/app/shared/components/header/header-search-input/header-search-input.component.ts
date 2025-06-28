import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header-search-input',
  imports: [],
  templateUrl: './header-search-input.component.html',
  styleUrl: './header-search-input.component.scss'
})
export class HeaderSearchInputComponent {
  placeholder = input.required<string>();
}
