import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PrefferedSponsoredChoice } from '../../interfaces/preffered-sponsored-choice';
import { PrefferedSponsoredChoiceComponent } from '../../components/preffered-sponsored-choice/preffered-sponsored-choice.component';
import { LicenseBoxProps } from '../../interfaces/license-box-props';
import { LicenseBoxComponent } from '../../components/license-box/license-box.component';

@Component({
  selector: 'app-validate-drill-search-results',
  standalone: true,
  imports: [
    CommonModule,
    PrefferedSponsoredChoiceComponent,
    LicenseBoxComponent,
  ],
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
              [oneChoice]="choi"
            />
          </div>
        </div>
      </div>
      <div class="bg-[#FAFBFE] p-10">
        <div class="flex justify-between ">
          <div
            class="flex items-center border-2 border-[#E4E4E4] rounded-md px-2 w-[70%]"
          >
            <img src="../../../assets/search2.svg" alt="" class=" w-5 h-5 " />
            <input
              type="text"
              placeholder="Søg efter bærbare"
              class="w-full px-4  py-2 outline-none bg-inherit"
            />
          </div>
          <button
            class="flex items-center gap-2  rounded-md bg-[#39B6CC] text-white px-4 py-1"
          >
            <img src="../../../assets/swap.svg" alt="" class="w-5 h-5" />
            <p>Sammenlign</p>
            <p class="bg-[#2D68FF] px-1 p-0.5 text-[10px] rounded-full">2</p>
          </button>
        </div>
      </div>
      <div class="flex gap-5 bg-[#FAFBFE] p-5">
        <div class="w-[20%] bg-white rounded-lg">Filter</div>
        <div class="w-[80%] bg-white rounded-md p-4">
          <div class="grid grid-cols-2 gap-5">
            <app-license-box
              *ngFor="let choi of licenseBoxList"
              [oneChoice]="choi"
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
      image: '../../../assets/licenseImage.png',
      title: 'Preferred Choice 1',
      subTitle: 'Subtitle for Choice 1',
      tags: ['Tag1', 'Tag2', 'Tag3'],
      otherTags: [
        { image: '../../../assets/otherTab1.png', title: 'Other Tag 1' },
        { image: '../../../assets/otherTab2.png', title: 'Other Tag 2' },
        { image: '../../../assets/otherTab3.png', title: 'Other Tag 2' },
        { image: '../../../assets/otherTab4.png', title: 'Other Tag 2' },
      ],
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image: '../../../assets/licenseImage.png',
      title: 'Preferred Choice 2',
      subTitle: 'Subtitle for Choice 2',
      tags: ['Tag4', 'Tag5', 'Tag6'],
      otherTags: [
        { image: '../../../assets/otherTab1.png', title: 'Other Tag 1' },
        { image: '../../../assets/otherTab2.png', title: 'Other Tag 2' },
        { image: '../../../assets/otherTab3.png', title: 'Other Tag 2' },
        { image: '../../../assets/otherTab4.png', title: 'Other Tag 2' },
      ],
      body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: '../../../assets/licenseImage.png',
      title: 'Preferred Choice 3',
      subTitle: 'Subtitle for Choice 3',
      tags: ['Tag7', 'Tag8', 'Tag9'],
      otherTags: [
        { image: '../../../assets/otherTab1.png', title: 'Other Tag 1' },
        { image: '../../../assets/otherTab2.png', title: 'Other Tag 2' },
        { image: '../../../assets/otherTab3.png', title: 'Other Tag 2' },
        { image: '../../../assets/otherTab4.png', title: 'Other Tag 2' },
      ],
      body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
  ];
  licenseBoxList: LicenseBoxProps[] = [
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 1',
      activities: 120,
      tags: ['Tag1', 'Tag2'],
      rating: 4.5,
      reviews: 120,
      lever: 3,
      body: 'Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 2',
      activities: 134,
      tags: ['Tag3', 'Tag4'],
      rating: 3.8,
      reviews: 80,
      lever: 2,
      body: 'Description of License 2.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 1',
      activities: 120,
      tags: ['Tag1', 'Tag2'],
      rating: 4.5,
      reviews: 120,
      lever: 3,
      body: 'Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 2',
      activities: 134,
      tags: ['Tag3', 'Tag4'],
      rating: 3.8,
      reviews: 80,
      lever: 2,
      body: 'Description of License 2.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 1',
      activities: 120,
      tags: ['Tag1', 'Tag2'],
      rating: 4.5,
      reviews: 120,
      lever: 3,
      body: 'Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 2',
      activities: 134,
      tags: ['Tag3', 'Tag4'],
      rating: 3.8,
      reviews: 80,
      lever: 2,
      body: 'Description of License 2.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 1',
      activities: 120,
      tags: ['Tag1', 'Tag2'],
      rating: 4.5,
      reviews: 120,
      lever: 3,
      body: 'Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 2',
      activities: 134,
      tags: ['Tag3', 'Tag4'],
      rating: 3.8,
      reviews: 80,
      lever: 2,
      body: 'Description of License 2.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 1',
      activities: 120,
      tags: ['Tag1', 'Tag2'],
      rating: 4.5,
      reviews: 120,
      lever: 3,
      body: 'Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 2',
      activities: 134,
      tags: ['Tag3', 'Tag4'],
      rating: 3.8,
      reviews: 80,
      lever: 2,
      body: 'Description of License 2.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
  ];
}
