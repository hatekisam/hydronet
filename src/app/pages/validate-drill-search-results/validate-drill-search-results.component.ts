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
        <div class="flex gap-3 items-center bg-[#BEE8EB] px-8 py-2">
          <p class="text-2xl text-[#46777B]">Search Result |</p>
          <p class="text-2xl text-[#46777B]">153</p>
          <p class="text-base text-[#46777B]">Results Found</p>
        </div>
        <!-- <div class=" h-1 bg-[#39B6CC] mx-5 rounded-full"></div>
        <!-- <div class="p-4">
            <p class="font-medium">Prefered & Sponsored Choice</p>
            <div class="grid grid-cols-3 gap-5">
              <app-preffered-sponsored-choice
                *ngFor="let choi of prefferedSponsoredChoice"
                [oneChoice]="choi"
              />
            </div>
          </div> -->
        <!-- </div>
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
      </div> -->
        <div class="bg-white rounded-md p-4 border shadow-sm m-2">
          <div class="flex justify-between items-center">
            <div class="flex gap-2 items-center">
              <img src="../../../assets/filter.svg" alt="" class="w-5 h-5" />
              <select
                class="border-[#0CB9DE] border outline-none text-[#0CB9DE] px-2 py-1 rounded-full bg-white"
              >
                <option value="">Victoria Island</option>
                <option value="">Victoria Island</option>
                <option value="">Victoria Island</option>
                <option value="">Victoria Island</option>
              </select>
              <select
                class="border-[#0CB9DE] border outline-none text-[#0CB9DE] px-2 py-1 rounded-full bg-white"
              >
                <option value="">Location</option>
                <option value="">Location</option>
                <option value="">Location</option>
                <option value="">Location</option>
              </select>
            </div>
            <div
              class="border-[#63CCD3] border-2 rounded-full flex items-center  "
            >
              <div
                *ngIf="displayWay == 'list'; else notList"
                class="flex gap-2 items-center rounded-full   h-full px-2 py-1 bg-[#0CB9DE]"
              >
                <img
                  src="../../../assets/showListSel.svg"
                  alt=""
                  class="w-5 h-5"
                />
              </div>
              <ng-template #notList>
                <button
                  (click)="changeDisplayWay('list')"
                  class="flex gap-2 items-center rounded-full text-white bg-white px-2 py-1 h-full"
                >
                  <img
                    src="../../../assets/showList.svg"
                    alt=""
                    class="w-5 h-5"
                  />
                </button>
              </ng-template>
              <div
                *ngIf="displayWay == 'grid'; else notGrid"
                class="flex gap-2 items-center rounded-full  bg-[#0CB9DE] px-2 py-1 h-full"
              >
                <img
                  src="../../../assets/showGridSel.svg"
                  alt=""
                  class="w-5 h-5"
                />
              </div>
              <ng-template #notGrid>
                <button
                  (click)="changeDisplayWay('grid')"
                  class="flex gap-2 items-center rounded-full text-white bg-white]  px-2 py-1 h-full"
                >
                  <img
                    src="../../../assets/showGrid.svg"
                    alt=""
                    class="w-5 h-5"
                  />
                </button>
              </ng-template>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-2">
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
