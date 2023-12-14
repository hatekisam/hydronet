import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <p>
      home works!
      <router-outlet></router-outlet>
    </p>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {}
