import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrillerLicenseProps } from '../../interfaces/driller-license-props';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-featured-box',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <a [routerLink]="'/driller/fafsdfasdfasdfdsafd'">
      <div class="bg-white p-2 shadow-sm rounded-md text-black ">
        <div class="flex justify-between items-center gap-3">
          <img
            [src]="oneChoice.image"
            [alt]="oneChoice.title"
            class="w-[50%]"
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
              <p class="text-[#2190A4] text-[8px] font-bold">
                WELL WATER RATING
              </p>
              <div class="relative h-2 rounded-full bg-[#E7F4F5] w-[200px]">
                <div
                  class="absolute h-full top-0 left-0 rounded-full  w-[50%] bg-[#39B6CC]"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="my-2 text-[#525967] text-[13px]">
          <div *ngIf="oneChoice.body.length >= 250; else fullBody">
            <p>{{ oneChoice.body.slice(0, 250) }}</p>
            <a href="" class="text-gray-400">more</a>
          </div>
          <ng-template #fullBody>
            <p>{{ oneChoice.body }}</p>
          </ng-template>
          <div class="flex gap-2 text-sm ">
            <button
              class=" rounded-md bg-[#39B6CC] text-white px-4 py-1 w-[50%]"
            >
              Contact Driller
            </button>
            <button
              class="border border-[#B7E5E8] rounded-md px-4 py-1 w-[50%]"
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </a>
  `,
})
export class FeaturedBoxComponent {
  @Input() oneChoice!: DrillerLicenseProps;
}
