import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainSideBarComponent } from '../../components/main-side-bar/main-side-bar.component';

@Component({
  selector: 'app-main-register',
  standalone: true,
  imports: [RouterOutlet, MainSideBarComponent],
  template: `
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class MainRegisterComponent {}
