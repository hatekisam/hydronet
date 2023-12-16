import { Component, Input, ViewEncapsulation } from '@angular/core';
import { DrillerLicenseProps } from '../../interfaces/driller-license-props';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-driller-license',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [MatProgressBarModule, CommonModule],
  template: `
    <div
      class="bg-white p-2 shadow-sm rounded-md text-black"
    >
      <div class="flex justify-between items-center gap-3">
        <img [src]="oneChoice.image" [alt]="oneChoice.title" class="w-[50%]" />
        <div class="w-full">
          <p class=" font-bold text-[#043924] my-2 text-center">
            {{ oneChoice.title }}
          </p>
          <p class=" font-bold text-[#39B6CC]  text-xs my-1 text-center">
            {{ oneChoice.subtitle }}
          </p>
          <div class="flex items-center gap-2">
            <p class="text-[#2190A4] text-[8px] font-bold">
              WELL WATER ANALYSIS
            </p>
            <mat-progress-bar
              class="audio-progress-bar"
              mode="determinate"
              value="{{ oneChoice.levels[0] }}"
            ></mat-progress-bar>
          </div>
          <div class="flex items-center gap-2">
            <p class="text-[#2190A4] text-[8px] font-bold">SOIL ANALYSIS</p>
            <mat-progress-bar
              class="audio-progress-bar"
              color="#2190A4"
              mode="determinate"
              value="{{ oneChoice.levels[1] }}"
            ></mat-progress-bar>
          </div>
          <div class="flex items-center gap-2">
            <p class="text-[#2190A4] text-[8px] font-bold">
              WELL WATER QUALITY
            </p>
            <mat-progress-bar
              class="audio-progress-bar"
              mode="determinate"
              value="{{ oneChoice.levels[2] }}"
            ></mat-progress-bar>
          </div>
          <div class="flex items-center gap-2">
            <p class="text-[#2190A4] text-[8px] font-bold">WELL WATER RATING</p>
            <mat-progress-bar
              class="audio-progress-bar"
              color="red"
              mode="determinate"
              value="{{ oneChoice.levels[3] }}"
            ></mat-progress-bar>
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
          <button class=" rounded-md bg-[#39B6CC] text-white px-4 py-1 w-[50%]">
            Contact Driller
          </button>
          <button class="border border-[#B7E5E8] rounded-md px-4 py-1 w-[50%]">
            Share
          </button>
        </div>
      </div>
    </div>
  `,
})
export class DrillerLicenseComponent {
  @Input() oneChoice!: DrillerLicenseProps;
}
