import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeSidebarComponent } from '../../components/home-sidebar/home-sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="relative">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class HomeComponent {}
