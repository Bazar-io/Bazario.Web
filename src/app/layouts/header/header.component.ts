import { Component } from '@angular/core';
import { HeaderSearchInputComponent } from "../../shared/components/header/header-search-input/header-search-input.component";
import { AddAdButtonComponent } from "../../shared/components/header/add-ad-button/add-ad-button.component";

@Component({
  selector: 'app-header',
  imports: [HeaderSearchInputComponent, AddAdButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  searchVisible: boolean = false;

  toggleSearchVisibility(): void {
    this.searchVisible = !this.searchVisible;
  }
}
