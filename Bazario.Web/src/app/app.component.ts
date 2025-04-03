import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InputComponent } from "./shared/components/input/input.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterModule, InputComponent],
})
export class AppComponent {
}
