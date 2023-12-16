import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { OneDrillerBriefComponent } from '../../components/one-driller-brief/one-driller-brief.component';
import { OneDrillerTrackRecordsComponent } from '../../components/one-driller-track-records/one-driller-track-records.component';

@Component({
  selector: 'app-one-driller',
  standalone: true,
  imports: [
    MatTabsModule,
    CommonModule,
    OneDrillerBriefComponent,
    OneDrillerTrackRecordsComponent,
  ],
  template: `
    <div class="bg-[#E7F4F5] p-3">
      <div class="bg-white p-4 rounded-md flex  justify-between gap-5">
        <div class="flex gap-5 items-center">
          <img src="../../../assets/dummyLogo.png" alt="" class="w-[150px]" />
          <div class="text-[#121212] text-center">
            <p class="text-3xl">Hyrdo Engineering Service Limited</p>
            <p>Lorem ipsum dolor sit amet consectetur. Sed consequat.</p>
          </div>
        </div>
        <div class="flex flex-col gap-2 text-sm text-[#121212] ">
          <div class="flex gap-2 items-center">
            <img src="../../../assets/locationBlue.svg" alt="" />
            <p>a31 Obafemi Awolowo way Off Allen Round About Ikeja, Lagos.</p>
          </div>
          <div class="flex gap-2 items-center">
            <img src="../../../assets/phoneBlue.svg" alt="" />
            <p>+1 (123) 123 1234</p>
          </div>
          <div class="flex gap-2 items-center">
            <img src="../../../assets/websiteBlue.svg" alt="" />
            <p>www.hydroeng.com</p>
          </div>
          <div class="flex gap-2 items-center">
            <img src="../../../assets/emailBlue.svg" alt="" />
            <p>hydroeng&#64;gmail.com</p>
          </div>
        </div>
      </div>
      <div class="flex p-4 gap-5">
        <div class="w-[60%] grid grid-cols-4 gap-5">
          <div class="bg-white rounded-xl p-3 text-center">
            <div class="flex gap-2 justify-between items-center">
              <img src="../../../assets/otherTab3.png" alt="" />
              <p class="text-[#0CB9DE] font-bold">WELL WATER ANALYSIS</p>
            </div>
            <div class="flex text-center items-center justify-center">
              <p class="text-[#0CB9DE] text-3xl font-bold mt-2">4</p>
              <sup class="text-black text-xs font-normal">out of 5</sup>
            </div>
          </div>
          <div class="bg-white rounded-xl p-3 text-center">
            <div class="flex gap-2 justify-between items-center">
              <img src="../../../assets/otherTab3.png" alt="" />
              <p class="text-[#0CB9DE] font-bold">WELL WATER ANALYSIS</p>
            </div>
            <div class="flex text-center items-center justify-center">
              <p class="text-[#0CB9DE] text-3xl font-bold mt-2">4</p>
              <sup class="text-black text-xs font-normal">out of 5</sup>
            </div>
          </div>
          <div class="bg-white rounded-xl p-3 text-center">
            <div class="flex gap-2 justify-between items-center">
              <img src="../../../assets/otherTab3.png" alt="" />
              <p class="text-[#0CB9DE] font-bold">WELL WATER ANALYSIS</p>
            </div>
            <div class="flex text-center items-center justify-center">
              <p class="text-[#0CB9DE] text-3xl font-bold mt-2">4</p>
              <sup class="text-black text-xs font-normal">out of 5</sup>
            </div>
          </div>
          <div class="bg-white rounded-xl p-3 text-center">
            <div class="flex gap-2 justify-between items-center">
              <img src="../../../assets/otherTab3.png" alt="" />
              <p class="text-[#0CB9DE] font-bold">WELL WATER ANALYSIS</p>
            </div>
            <div class="flex text-center items-center justify-center">
              <p class="text-[#0CB9DE] text-3xl font-bold mt-2">4</p>
              <sup class="text-black text-xs font-normal">out of 5</sup>
            </div>
          </div>
        </div>
        <div class="w-[40%] grid grid-cols-2 gap-5">
          <div class="bg-white rounded-xl p-3 text-center">
            <div class="flex gap-2 justify-center items-center">
              <img src="../../../assets/award.svg" alt="" class="w-5 h-5" />
              <img src="../../../assets/award.svg" alt="" class="w-5 h-5" />
              <img src="../../../assets/award.svg" alt="" class="w-5 h-5" />
              <img src="../../../assets/award.svg" alt="" class="w-5 h-5" />
              <img
                src="../../../assets/awardBlack.svg"
                alt=""
                class="w-5 h-5"
              />
            </div>
            <p class="text-center text-[#121212] font-bold mt-1">Awards</p>
            <div class="flex items-center gap-2 my-2">
              <div
                class="border border-[#0CB9DE] px-2 py-1 rounded-full flex items-center gap-1"
              >
                <img
                  src="../../../assets/cupAward.svg"
                  alt=""
                  class="w-4 h-4"
                />
                <p class="text-[#121212] text-[9px]">Top in drilling</p>
              </div>
              <div
                class="border border-[#0CB9DE] px-2 py-1 rounded-full flex items-center gap-1"
              >
                <img
                  src="../../../assets/localRanking.svg"
                  alt=""
                  class="w-4 h-4"
                />
                <p class="text-[#121212] text-[9px]">#12 Local Ranking</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-3 text-center">
            <div class="flex gap-2  justify-center items-center">
              <p class="text-[#0CB9DE] text-6xl font-bold">5</p>
              <div class="text-[#121212]">
                <p class="font-bold">Excellent</p>
                <p class="text-xs">158 reveiws</p>
              </div>
            </div>
            <div class="flex gap-2 justify-center items-center">
              <img src="../../../assets/star.svg" alt="" class="w-5 h-5" />
              <img src="../../../assets/star.svg" alt="" class="w-5 h-5" />
              <img src="../../../assets/star.svg" alt="" class="w-5 h-5" />
              <img src="../../../assets/star.svg" alt="" class="w-5 h-5" />
              <img src="../../../assets/star.svg" alt="" class="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
      <div class="my-2">
        <div class="flex ">
          <button
            class="bg-inherit border-b-4 px-4  "
            [ngClass]="{ 'border-b-[#0CB9DE] ': activeTab === 0 }"
            (click)="changeActive(0)"
          >
            Brief
          </button>
          <button
            class="bg-inherit border-b-4 px-4 "
            [ngClass]="{ 'border-b-[#0CB9DE] ': activeTab === 1 }"
            (click)="changeActive(1)"
          >
            Track Records
          </button>
          <button
            class="bg-inherit border-b-4 px-4 "
            [ngClass]="{ 'border-b-[#0CB9DE] ': activeTab === 2 }"
            (click)="changeActive(2)"
          >
            Equipments
          </button>
          <button
            class="bg-inherit border-b-4 px-4 "
            [ngClass]="{ 'border-b-[#0CB9DE] ': activeTab === 3 }"
            (click)="changeActive(3)"
          >
            Contact Us
          </button>
          <button
            class="bg-inherit border-b-4 px-4 "
            [ngClass]="{ 'border-b-[#0CB9DE] ': activeTab === 4 }"
            (click)="changeActive(4)"
          >
            About Us
          </button>
        </div>
        <div *ngIf="activeTab === 0">
          <app-one-driller-brief />
        </div>
        <div *ngIf="activeTab === 1">
          <app-one-driller-track-records />
        </div>
        <div *ngIf="activeTab === 2">
          <p>Equipments content goes here.</p>
        </div>
        <div *ngIf="activeTab === 3">
          <p>Contact Us content goes here.</p>
        </div>
        <div *ngIf="activeTab === 4">
          <p>About Us content goes here.</p>
        </div>
      </div>
    </div>
  `,
})
export class OneDrillerComponent {
  activeTab = 0;
  changeActive(tab: number) {
    this.activeTab = tab;
  }
}
