import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-side-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      [ngClass]="{ 'w-25vw': showText, 'w-auto': !showText }"
      class=" transition-all duration-200 flex items-center justify-center p-4"
    >
      <div class="">
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
        <div class="bg-white border rounded-b-xl p-4">
          <p class="text-[#5C5E64] uppercase font-medium text-[10px]">Compliance</p>
          <div>
            <div class="flex items-center gap-2">
              <img src="../" alt="">
            </div>
          </div>
        </div>
        <ng-container *ngIf="showText">
          <!-- Content with text -->
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

  changeTab(num: number) {
    if (this.activeTab !== num) {
      this.activeTab = num;
    }
  }

  toggleState() {
    this.showText = !this.showText;
  }
}
