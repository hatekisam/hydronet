import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MainSideLink } from '../../interfaces/main-side-link';
import { MainSideBarLinkComponent } from '../main-side-bar-link/main-side-bar-link.component';

@Component({
  selector: 'app-main-side-bar',
  standalone: true,
  imports: [CommonModule, MainSideBarLinkComponent],
  template: `
    <div
      [ngClass]="{ 'w-[20vw]': showText, 'w-auto': !showText }"
      class=" transition-all duration-200 flex items-center justify-center p-4 "
    >
      <div class="w-full">
        <div class="bg-[#63CCD3] rounded-t-xl p-4 flex gap-1">
          <div class="flex p-1 bg-[#B4E8EC] rounded-full w-full">
            <button
              (click)="changeTab(0)"
              class=" px-2   text-[#F7FEFF] text-xs text-center py-0.5 rounded-full"
              [ngClass]="{ 'bg-[#62CCD3]': activeTab === 0 }"
            >
              Registration
            </button>
            <button
              (click)="changeTab(1)"
              class=" px-2   text-[#F7FEFF] text-xs text-center py-0.5 rounded-full"
              [ngClass]="{ 'bg-[#62CCD3]': activeTab === 1 }"
            >
              Tools
            </button>
          </div>
          <img src="../../../assets/menuDots.svg" alt="" />
        </div>
        <div class="bg-white border rounded-b-xl ">
          <div class="p-4 border-b border-b-[#5C5E64]">
            <p class="text-[#5C5E64] uppercase font-medium text-[10px]">
              Compliance
            </p>
            <div class="text-[14px]">
              <app-main-side-bar-link
                *ngFor="let link of primaryLinks"
                [link]="link"
              ></app-main-side-bar-link>
            </div>
          </div>
          <div class="p-4 border-b border-b-[#5C5E64]">
            <p class="text-[#5C5E64] uppercase font-medium text-[10px]">
              Settings
            </p>
            <div class="text-[14px]">
              <app-main-side-bar-link
                *ngFor="let link of secondaryLinks"
                [link]="link"
              ></app-main-side-bar-link>
            </div>
          </div>
          <div
            class="bg-[#FaFaFa] rounded-t-xl p-4 flex items-center justify-center"
          >
            <div class="flex p-1 bg-[#F0F0F0] rounded-md  w-full">
              <button
                (click)="changeTheme(0)"
                class=" px-2    text-xs text-center py-0.5 rounded-md flex items-center gap-2"
                [ngClass]="{ 'bg-white': activeTheme === 0 }"
              >
                <img
                  src="../../../assets/menuLight.svg"
                  alt=""
                  class="w-5 h-5"
                />
                <p>Light</p>
              </button>
              <button
                (click)="changeTheme(1)"
                class=" px-2    text-xs text-center py-0.5 rounded-md flex items-center gap-2"
                [ngClass]="{ 'bg-white': activeTheme === 1 }"
              >
                <img
                  src="../../../assets/menuDark.svg"
                  alt=""
                  class="w-5 h-5"
                />
                <p>Dark</p>
              </button>
            </div>
          </div>
        </div>
        <ng-container *ngIf="showText">
          <p>This is some text content.</p>
          <button (click)="toggleState()">Resize</button>
        </ng-container>
      </div>
    </div>
  `,
})
export class MainSideBarComponent {
  showText = true;
  activeTab = 0;
  activeTheme = 0;

  changeTab(num: number) {
    if (this.activeTab !== num) {
      this.activeTab = num;
    }
  }
  changeTheme(num: number) {
    if (this.activeTheme !== num) {
      this.activeTheme = num;
    }
  }

  toggleState() {
    this.showText = !this.showText;
  }
  primaryLinks: MainSideLink[] = [
    {
      title: 'Home',
      to: '/main',
      image: '../../../assets/menuHome.svg',
    },
    {
      title: 'Search',
      to: '/main',
      image: '../../../assets/menuSearch.svg',
    },
    {
      title: 'Registration',
      image: '../../../assets/menuRegister.svg',
      subroutes: [
        { title: 'Company Profile', to: '/main/register/company' },
        {
          title: 'Driller Permit & Certificates',
          to: '/main/register/permit-certificates',
        },
        { title: 'User Accounts', to: '/main/register/users' },
        { title: 'Payment', to: '/main/register/payment' },
      ],
    },
    {
      title: 'Permit',
      to: '/permit',
      image: '../../../assets/menuPermit.svg',
    },
    {
      title: 'Analysis',
      image: '../../../assets/menuAnalyse.svg',
      subroutes: [
        { title: 'Company Profile', to: '/main/register/company' },
        {
          title: 'Driller Permit & Certificates',
          to: '/main/register/permit-certificates',
        },
        { title: 'User Accounts', to: '/main/register/users' },
        { title: 'Payment', to: '/main/register/payment' },
      ],
    },
  ];
  secondaryLinks: MainSideLink[] = [
    {
      title: 'Notification',
      to: '/main/notifications',
      image: '../../../assets/menuNotification.svg',
    },
    {
      title: 'Settings',
      to: '/main/settings',
      image: '../../../assets/menuSettings.svg',
    },
  ];
}
