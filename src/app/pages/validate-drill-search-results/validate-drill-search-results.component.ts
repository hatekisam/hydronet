import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PrefferedSponsoredChoice } from '../../interfaces/preffered-sponsored-choice';
import { PrefferedSponsoredChoiceComponent } from '../../components/preffered-sponsored-choice/preffered-sponsored-choice.component';

@Component({
  selector: 'app-validate-drill-search-results',
  standalone: true,
  imports: [CommonModule, PrefferedSponsoredChoiceComponent],
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
        <div class=" h-1 bg-[#39B6CC] mx-5 rounded-full"></div>
        <div class="p-4">
          <p class="font-medium">Prefered & Sponsored Choice</p>
          <div class="grid grid-cols-3 gap-5">
            <app-preffered-sponsored-choice
              *ngFor="let choi of prefferedSponsoredChoice"
              [oneChoice] = "choi"
            />
          </div>
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

  prefferedSponsoredChoice: PrefferedSponsoredChoice[] = [
    {
      image: 'path/to/image1.jpg',
      title: 'Preferred Choice 1',
      subTitle: 'Subtitle for Choice 1',
      tags: ['Tag1', 'Tag2', 'Tag3'],
      otherTags: [
        { image: 'path/to/tagImage1.jpg', title: 'Other Tag 1' },
        { image: 'path/to/tagImage2.jpg', title: 'Other Tag 2' },
      ],
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image: 'path/to/image2.jpg',
      title: 'Preferred Choice 2',
      subTitle: 'Subtitle for Choice 2',
      tags: ['Tag4', 'Tag5', 'Tag6'],
      otherTags: [
        { image: 'path/to/tagImage3.jpg', title: 'Other Tag 3' },
        { image: 'path/to/tagImage4.jpg', title: 'Other Tag 4' },
      ],
      body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: 'path/to/image3.jpg',
      title: 'Preferred Choice 3',
      subTitle: 'Subtitle for Choice 3',
      tags: ['Tag7', 'Tag8', 'Tag9'],
      otherTags: [
        { image: 'path/to/tagImage5.jpg', title: 'Other Tag 5' },
        { image: 'path/to/tagImage6.jpg', title: 'Other Tag 6' },
      ],
      body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
  ];
}
