import { Component, Input } from '@angular/core';
import { PrefferedSponsoredChoice } from '../../interfaces/preffered-sponsored-choice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preffered-sponsored-choice',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white p-2 shadow-sm rounded-md text-black">
      <div class="flex justify-between items-center gap-5">
        <img [src]="oneChoice.image" [alt]="oneChoice.title" />
        <div>
          <p class="text-center font-bold text-[#043924] my-2">
            {{ oneChoice.title }}
          </p>
          <p class="text-center font-bold text-[#39B6CC] my-1 text-xs">
            {{ oneChoice.title }}
          </p>
          <div class="flex flex-wrap items-center gap-2">
            <p
              class="text-white px-2 bg-[#62CCD3] rounded-full text-xs p-1"
              *ngFor="let tag of oneChoice.tags"
            >
              {{ tag }}
            </p>
          </div>
          <div class="grid grid-cols-4 gap-3 my-2">
            <div
              class="text-white p-2 bg-[#62CCD3]  rounded-md flex items-center flex-col"
              *ngFor="let tag of oneChoice.otherTags"
            >
              <img [src]="tag.image" />
              <p class="text-[#2190A4] font-bold text-[10px] text-center">
                {{ tag.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="my-2">
        <div *ngIf="oneChoice.body.length >= 150; else fullBody">
          <p>{{ oneChoice.body.slice(0, 150) }}</p>
          <a href="">more</a>
        </div>
        <ng-template #fullBody>
          <p>{{ oneChoice.body }}</p>
        </ng-template>
      </div>
      <div class="flex gap-2 text-sm">
        <button class=" rounded-md bg-[#39B6CC] text-white px-4 py-1">
          Contact Driller
        </button>
        <button
          class="border border-[#E7F4F5] rounded-md text-[#39B6CC] px-4 py-1"
        >
          View Mobile Number
        </button>
        <button class="border border-[#B7E5E8] rounded-md px-4 py-1">
          Share
        </button>
      </div>
    </div>
  `,
})
export class PrefferedSponsoredChoiceComponent {
  @Input() oneChoice!: PrefferedSponsoredChoice;
}
