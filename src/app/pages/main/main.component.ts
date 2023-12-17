import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainSideBarComponent } from '../../components/main-side-bar/main-side-bar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, MainSideBarComponent],
  template: `
    <div class="flex gap-2 items-center">
      <app-main-side-bar />
      <router-outlet></router-outlet>
    </div>
  `,
})
export class MainComponent {}
