import { Component } from '@angular/core';
import { HomeSideLink } from '../../interfaces/home-side-link';
import { HomeSidebarLinkComponent } from '../home-sidebar-link/home-sidebar-link.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-sidebar',
  standalone: true,
  imports: [HomeSidebarLinkComponent, CommonModule],
  template: `
    <div class="absolute  sm:w-auto w-full lg:left-0 top-20 lg:px-0 px-1 left-[30%] -translate-x-[120px] sm:-translate-x-[90px] lg:-translate-x-0 lg:top-1/2 transform -translate-y-1/2 z-20 ">
      <div class="border-4 lg:gap-0 gap-4 border-[#39B6CC] lg:rounded-none rounded-md lg:rounded-r-3xl flex-row flex lg:flex-col lg:w-[100px] bg-white">
        <app-home-sidebar-link *ngFor="let link of links" [link]="link" />
      </div>
    </div>
  `,
})
export class HomeSidebarComponent {
  links: HomeSideLink[] = [
    {
      title: 'Validate Driller Permit',
      icon: '/assets/homeSideIcon.svg',
      to: '',
    },
    {
      title: 'Renew Permit',
      icon: '/assets/homeSideIcon.svg',
      to: 'renew',
    },
    {
      title: 'Apply for Driller License',
      icon: '/assets/homeSideIcon.svg',
      to: 'apply-driller',
    },
    {
      title: 'Apply for Borehole Permit',
      icon: '/assets/homeSideIcon.svg',
      to: '',
    },
    {
      title: 'Request Water Test/Analysis',
      icon: '/assets/homeSideIcon.svg',
      to: '',
    },
  ];
}
