import { Component, Input } from '@angular/core';
import { HomeSideLink } from '../../interfaces/home-side-link';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-sidebar-link',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <a
      [routerLink]="link.to"
      class="py-2 border-none lg:gap-0 lg: hover:bg-[#62CCD3] border-[#3A949A] flex flex-col items-center justify-center"
      [ngClass]="{ 'border-b-2': link.id !== 5 }"
    >
      <img class="listing-photo" [src]="link.icon" />
      <p class="text-center text-black font-extrabold text-[10px]">
        {{ link.title }}
      </p>
    </a>
  `,
})
export class HomeSidebarLinkComponent {
  @Input() link!: HomeSideLink;
}
