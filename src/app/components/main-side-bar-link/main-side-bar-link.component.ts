import { Component, Input } from '@angular/core';
import { MainSideLink } from '../../interfaces/main-side-link';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-side-bar-link',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <ng-container
      *ngIf="link.subroutes && link.subroutes.length > 0; else regularLink"
    >
      <div
        class="flex justify-between items-center my-2 cursor-pointer"
        (click)="toggleDropdown()"
      >
        <div class="flex gap-2 items-center">
          <img [src]="link.image" alt="" class="w-5 h-5" />
          <p>{{ link.title }}</p>
        </div>
        <button>
          <div *ngIf="showDropdown == false; else dropped">
            <img src="../../../assets/downPointer.svg" alt="" />
          </div>
          <ng-template #dropped>
            <div><img src="../../../assets/upPointer.svg" alt="" /></div>
          </ng-template>
        </button>
      </div>
      <div *ngIf="showDropdown" class="pl-2 border-l-[#D9D9D9] border-l-2 ml-2">
        <a *ngFor="let subLink of link.subroutes" [routerLink]="subLink.to">
          <div class="flex gap-2 items-center text-xs my-1">
            <p>{{ subLink.title }}</p>
          </div>
        </a>
      </div>
    </ng-container>

    <ng-template #regularLink>
      <a [routerLink]="link.to">
        <div class="flex gap-2 items-center my-2">
          <img [src]="link.image" alt="" class="w-5 h-5" />
          <p>{{ link.title }}</p>
        </div>
      </a>
    </ng-template>
  `,
})
export class MainSideBarLinkComponent {
  @Input() link!: MainSideLink;
  showDropdown: boolean = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}
