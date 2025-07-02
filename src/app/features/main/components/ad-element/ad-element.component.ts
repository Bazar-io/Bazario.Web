import { Component, input } from '@angular/core';
import { Ad } from '../../models/ad';

@Component({
  selector: 'app-ad-element',
  imports: [],
  templateUrl: './ad-element.component.html',
  styleUrl: './ad-element.component.scss'
})
export class AdElementComponent {
  ad = input.required<Ad>();
}
