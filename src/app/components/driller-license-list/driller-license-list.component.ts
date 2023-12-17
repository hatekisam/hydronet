import { Component, Input } from '@angular/core';
import { DrillerLicenseProps } from '../../interfaces/driller-license-props';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-driller-license-list',
  standalone: true,
  imports: [MatProgressBarModule, CommonModule],
  template: `
    <div
      class="bg-white p-2 shadow-md flex flex-col lg:flex-row gap-5 rounded-md text-black"
    >
      <div
        class="flex flex-col sm:flex-row justify-between items-center gap-3 w-full lg:w-[45%]"
      >
        <img
          [src]="oneChoice.image"
          [alt]="oneChoice.title"
          class="w-full md:w-[250px]"
        />
        <div class="w-full">
          <p class=" font-bold text-[#043924] my-2 text-center">
            {{ oneChoice.title }}
          </p>
          <p class=" font-bold text-[#39B6CC]  text-xs my-1 text-center">
            {{ oneChoice.subtitle }}
          </p>
          <div class="flex items-center gap-2">
            <img src="../../../assets/otherTab4.png" alt="" />
            <p class="text-[#2190A4] text-[8px] font-bold">
              WELL WATER ANALYSIS
            </p>
            <div class="relative h-2 rounded-full bg-[#E7F4F5] w-[200px]">
              <div
                class="absolute h-full top-0 left-0 rounded-full  w-[60%] bg-[#39B6CC]"
              ></div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <img src="../../../assets/otherTab2.png" alt="" />
            <p class="text-[#2190A4] text-[8px] font-bold">SOIL ANALYSIS</p>
            <div class="relative h-2 rounded-full bg-[#E7F4F5] w-[200px]">
              <div
                class="absolute h-full top-0 left-0 rounded-full  w-[70%] bg-[#39B6CC]"
              ></div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <img src="../../../assets/otherTab1.png" alt="" />
            <p class="text-[#2190A4] text-[8px] font-bold">
              WELL WATER QUALITY
            </p>
            <div class="relative h-2 rounded-full bg-[#E7F4F5] w-[200px]">
              <div
                class="absolute h-full top-0 left-0 rounded-full  w-[40%] bg-[#39B6CC]"
              ></div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <img src="../../../assets/otherTab4.png" alt="" />
            <p class="text-[#2190A4] text-[8px] font-bold">WELL WATER RATING</p>
            <div class="relative h-2 rounded-full bg-[#E7F4F5] w-[200px]">
              <div
                class="absolute h-full top-0 left-0 rounded-full  w-[50%] bg-[#39B6CC]"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="my-2 text-[#525967] text-[13px] w-full lg:w-[55%]">
        <div *ngIf="oneChoice.body.length >= 500; else fullBody">
          <p>{{ oneChoice.body.slice(0, 500) }}</p>
          <a href="" class="text-gray-400">more</a>
        </div>
        <ng-template #fullBody>
          <p>{{ oneChoice.body }}</p>
        </ng-template>
        <div class="flex gap-2 text-sm ">
          <button class=" rounded-md bg-[#39B6CC] text-white px-4 py-1 w-[50%]">
            Contact Driller
          </button>
          <button class="border border-[#B7E5E8] rounded-md px-4 py-1 w-[50%]">
            Share
          </button>
          <button>
            <img src="../../../shareIcon.svg" alt="" class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  `,
})
export class DrillerLicenseListComponent {
  @Input() oneChoice!: DrillerLicenseProps;
}
