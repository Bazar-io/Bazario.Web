import { Component } from '@angular/core';
import { MainSearchBarComponent } from './components/main-search-bar/main-search-bar.component';
import { AdsListComponent } from "./components/ads-list/ads-list.component";

@Component({
  selector: 'app-main',
  imports: [MainSearchBarComponent, AdsListComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
}
