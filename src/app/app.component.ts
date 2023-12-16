import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  template: `<main class="w-screen h-screen overflow-x-hidden">
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  </main>`,
})
export class AppComponent {
  title = 'hydronet';
}
