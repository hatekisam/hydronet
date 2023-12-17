import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-register',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="flex gap-2">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class MainRegisterComponent {}
