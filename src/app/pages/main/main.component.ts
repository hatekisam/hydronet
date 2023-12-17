import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainSideBarComponent } from '../../components/main-side-bar/main-side-bar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, MainSideBarComponent],
  template: `
    <div class="flex gap-2 items-center bg-[#E7F4F5] h-[88%] overflow-hidden">
      <app-main-side-bar />
      <div class="h-full overflow-y-auto">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class MainComponent {}
