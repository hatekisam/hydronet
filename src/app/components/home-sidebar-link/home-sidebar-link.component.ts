import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-sidebar-link',
  standalone: true,
  imports: [],
  template: ` <p>home-sidebar-link works!</p> `,
})
export class HomeSidebarLinkComponent {
  @Input() link;
}
