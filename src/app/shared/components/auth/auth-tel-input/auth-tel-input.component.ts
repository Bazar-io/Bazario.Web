import { Component, input } from '@angular/core';
import { IConfig, NgxCountriesDropdownModule } from 'ngx-countries-dropdown';

@Component({
  selector: 'app-auth-tel-input',
  imports: [NgxCountriesDropdownModule],
  templateUrl: './auth-tel-input.component.html',
  styleUrl: './auth-tel-input.component.scss'
})
export class AuthTelInputComponent {
  selectedCountry: string = 'PL';
  label = input.required<string>();
  placeholder = input.required<string>();
  id = input.required<string>();

  selectedCountryConfig: IConfig = {
    hideCode: true,
    hideName: true
  };
  
  countryListConfig: IConfig = {
    hideCode: true,
  };

  onCountryChange(country: any) {
  }
}
