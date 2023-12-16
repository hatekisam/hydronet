import { Component } from '@angular/core';
import { HomeSideLink } from '../../interfaces/home-side-link';
import { HomeSidebarLinkComponent } from '../home-sidebar-link/home-sidebar-link.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-sidebar',
  standalone: true,
  imports: [HomeSidebarLinkComponent, CommonModule],
  template: `
    <div class="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 ">
      <div class="border-4 border-[#39B6CC] rounded-r-3xl  w-[100px] bg-white">
        <app-home-sidebar-link *ngFor="let link of links" [link]="link" />
      </div>
    </div>
  `,
})
export class HomeSidebarComponent {
  links: HomeSideLink[] = [
    {
      id:1,
      title: 'Validate Driller Permit',
      icon: '/assets/homeSideIcon.svg',
      to: '',
    },
    {
      id:2,
      title: 'Renew Permit',
      icon: '/assets/homeSideIcon.svg',
      to: 'renew',
    },
    {
      id:3,
      title: 'Apply for Driller License',
      icon: '/assets/homeSideIcon.svg',
      to: 'apply-driller',
    },
    {
      id:4,
      title: 'Apply for Borehole Permit',
      icon: '/assets/homeSideIcon.svg',
      to: '',
    },
    {
      id:5,
      title: 'Request Water Test/Analysis',
      icon: '/assets/homeSideIcon.svg',
      to: '',
    },
  ];
}
