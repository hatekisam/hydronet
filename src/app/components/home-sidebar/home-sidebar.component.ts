import { Component } from '@angular/core';
import { HomeSideLink } from '../../interfaces/home-side-link';
import { HomeSidebarLinkComponent } from '../home-sidebar-link/home-sidebar-link.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-sidebar',
  standalone: true,
  imports: [HomeSidebarLinkComponent, CommonModule],
  template: `
    <div
      class=" w-full top-0 left-0 absolute lg:top-1/2 lg:left-0 transform lg:-translate-y-1/2 z-20 px-2 "
    >
      <div
        class="lg:border-4 border-0 border-b-4 lg:gap-0 gap-4 border-[#39B6CC] lg:rounded-none rounded-b-md lg:rounded-r-3xl flex-row justify-between flex lg:flex-col lg:w-[100px] bg-white px-2"
      >
        <app-home-sidebar-link *ngFor="let link of links" [link]="link" />
      </div>
    </div>
  `,
})
export class HomeSidebarComponent {
  links: HomeSideLink[] = [
    {
      id: 1,
      title: 'Validate Driller Permit',
      icon: '/assets/homeSideIcon.svg',
      to: '',
    },
    {
      id: 2,
      title: 'Renew Permit',
      icon: '/assets/homeSideIcon.svg',
      to: 'renew',
    },
    {
      id: 3,
      title: 'Apply for Driller License',
      icon: '/assets/homeSideIcon.svg',
      to: 'apply-driller',
    },
    {
      id: 4,
      title: 'Apply for Borehole Permit',
      icon: '/assets/homeSideIcon.svg',
      to: '',
    },
    {
      id: 5,
      title: 'Request Water Test/Analysis',
      icon: '/assets/homeSideIcon.svg',
      to: '',
    },
  ];
}
