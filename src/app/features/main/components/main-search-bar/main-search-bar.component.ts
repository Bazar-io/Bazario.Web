import { Component, input } from '@angular/core';

@Component({
  selector: 'app-main-search-bar',
  imports: [],
  templateUrl: './main-search-bar.component.html',
  styleUrl: './main-search-bar.component.scss'
})
export class MainSearchBarComponent {
  placeholder = input.required<string>();
}
