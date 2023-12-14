import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-validate-drill-search-results',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <div class="bg-[#E7F4F5]">
        <div class="flex justify-between px-8 py-2">
          <p class="text-3xl text-[#0A2540]">BoreHole Drillers</p>
          <div class="flex items-center gap-1">
            <p class="text-[#425466] text-xs">Forside</p>
            <img src="../../../assets/rightArrow.svg" alt="" />
            <p class="text-[#425466] text-xs">Bærbar</p>
            <img src="../../../assets/rightArrow.svg" alt="" />
            <p class="text-[#425466] text-xs">Alle Bærbar</p>
          </div>
        </div>
        <div class="flex justify-between px-8 py-2">
          <div class="flex items-center gap-5">
            <select
              class="bg-white   py-2 px-3 border rounded-md border-black outline-none"
            >
              <option>Victoria Island</option>
              <option>Location</option>
              <option>Location</option>
              <option>Location</option>
            </select>
            <select
              class="bg-white   py-2 px-3 border rounded-md border-black outline-none"
            >
              <option>Highly Recommended</option>
              <option>Location</option>
              <option>Location</option>
              <option>Location</option>
            </select>
          </div>
          <div class="border-[#63CCD3] border-2 rounded-md flex items-center  ">
            <div
              *ngIf="displayWay == 'list'; else notList"
              class="flex gap-2 items-center text-gray-700  h-full p-2 bg-[#2C7784]"
            >
              <img src="../../../assets/showList.svg" alt="" />
              <p>List</p>
            </div>
            <ng-template #notList>
              <button
                (click)="changeDisplayWay('list')"
                class="flex gap-2 items-center text-white bg-[rgba(44,169,191,0.73)] p-2 h-full"
              >
                <img src="../../../assets/showList.svg" alt="" />
                <p>List</p>
              </button>
            </ng-template>
            <div
              *ngIf="displayWay == 'grid'; else notGrid"
              class="flex gap-2 items-center text-gray-700 bg-[#2C7784] p-2 h-full"
            >
              <img src="../../../assets/showGrid.svg" alt="" />
              <p>Grid</p>
            </div>
            <ng-template #notGrid>
              <button
                (click)="changeDisplayWay('grid')"
                class="flex gap-2 items-center text-white bg-[rgba(44,169,191,0.73)] p-2 h-full"
              >
                <img src="../../../assets/showGrid.svg" alt="" />
                <p>Grid</p>
              </button>
            </ng-template>
          </div>
        </div>
        <div class=" h-2 bg-[#39B6CC] mx-5 rounded-full"></div>
        <div class="p-2">
          <p class="font-medium">Prefered & Sponsored Choice </p>
        </div>
      </div>
    </div>
  `,
})
export class ValidateDrillSearchResultsComponent {
  displayWay: 'grid' | 'list';
  constructor() {
    this.displayWay = 'list';
  }
  changeDisplayWay(way: 'grid' | 'list') {
    this.displayWay = way;
  }
}
