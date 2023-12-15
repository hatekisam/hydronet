import { Component, Input } from '@angular/core';
import { LicenseBoxProps } from '../../interfaces/license-box-props';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-license-box',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white p-2 shadow-sm rounded-md text-black">
      <p class=" font-bold text-[#043924] my-2">
        {{ oneChoice.title }}
      </p>
      <div class="flex justify-between items-center gap-3">
        <img [src]="oneChoice.image" [alt]="oneChoice.title" class="w-[50%]" />
        <div class="w-full">
          <div class="flex flex-wrap items-center gap-2">
            <p
              class="text-white px-2 bg-[#62CCD3] rounded-full text-xs p-1"
              *ngFor="let tag of oneChoice.tags"
            >
              {{ tag }}
            </p>
          </div>
          <p class="font-bold text-[#043924] my-1 text-xl">
            {{ oneChoice.activities }} BoreHole Activities
          </p>
          <p>LSWRC Compliance Grading</p>
        </div>
      </div>
      <div class="my-2 text-[#525967] text-[11px]">
        <div *ngIf="oneChoice.body.length >= 150; else fullBody">
          <p>{{ oneChoice.body.slice(0, 150) }}</p>
          <a href="" class="text-gray-400">more</a>
        </div>
        <ng-template #fullBody>
          <p>{{ oneChoice.body }}</p>
        </ng-template>
      </div>
      <div class="flex gap-2 text-sm ">
        <button class=" rounded-md bg-[#39B6CC] text-white px-4 py-1 w-[50%]">
          Contact Driller
        </button>
        <button class="border border-[#B7E5E8] rounded-md px-4 py-1 w-[50%]">
          Share
        </button>
      </div>
    </div>
  `,
})
export class LicenseBoxComponent {
  @Input() oneChoice!: LicenseBoxProps;
}
