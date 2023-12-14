import { Component } from '@angular/core';

@Component({
  selector: 'app-home-sidebar',
  standalone: true,
  imports: [],
  template: `
    <div class="absolute left-0 top-1/2 transform -translate-y-1/2">
      <div
        class="border-4 border-[#39B6CC] rounded-r-3xl h-[400px] w-[100px]"
      ></div>
    </div>
  `,
  styleUrl: './home-sidebar.component.css',
})
export class HomeSidebarComponent {
  links = [
    {
      title: 'Validate Driller Permit',
      icon: '/assets/homeSideIcon.svg',
      link: '',
    },
    {
      title: 'Renew Permit',
      icon: '/assets/homeSideIcon.svg',
      link: 'renew',
    },
    {
      title: 'Apply for Driller License',
      icon: '/assets/homeSideIcon.svg',
      link: '',
    },
    {
      title: 'Apply for Borehole Permit',
      icon: '/assets/homeSideIcon.svg',
      link: '',
    },
    {
      title: 'Request Water Test/Analysis',
      icon: '/assets/homeSideIcon.svg',
      link: '',
    },
  ];
}
