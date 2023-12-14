import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeSidebarComponent } from '../../components/home-sidebar/home-sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HomeSidebarComponent],
  template: `
    <div class="w-full h-full overflow-hidden">
      <app-home-sidebar />
      <router-outlet></router-outlet>
    </div>
  `,
})
export class HomeComponent {}
