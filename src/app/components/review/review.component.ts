import { Component, Input } from '@angular/core';
import { Reveiw } from '../../interfaces/reveiw';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="my-2 mx-1">
      <div class="flex gap-2 items-center">
        <img [src]="reveiw.image" [alt]="reveiw.name" />
        <div>
          <p class="text-[#121212] font-semibold">{{ reveiw.name }}</p>
          <div class="flex gap-1 items-center flex-row ">
            <div
              *ngFor="let star of [].constructor(reveiw.rating); let i = index"
            >
              <img src="../../../assets/star.svg" alt="star" class="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
      <p class="text-xs text-[#121212]">{{ reveiw.body }}</p>
      <div *ngIf="!isLastIndex" class="border-b border-b-[#0CB9DE] my-3"></div>
    </div>
  `,
})
export class ReviewComponent {
  @Input() reveiw!: Reveiw;
  @Input() isLastIndex: boolean = false;
}
