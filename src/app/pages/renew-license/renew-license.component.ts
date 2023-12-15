import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LicenseBoxComponent } from '../../components/license-box/license-box.component';

@Component({
  selector: 'app-renew-license',
  standalone: true,
  imports: [CommonModule, LicenseBoxComponent],
  template: `
    <div>
      <img src="../../assets/renewLicense.png" alt="" />
      <div class="bg-[#39B6CC]"></div>
      <div class="flex justify-between px-3 bg-[rgb(98,204,211)]">
        <p class="text-[#0A2540] text-[27px] ">{{ licenseData.id }}</p>
        <div class="flex items-center gap-2">
          <p
            *ngFor="let tag of licenseData.tags"
            class="text-white px-2 bg-[#62CCD3] rounded-full text-[8px] font-normal  p-1"
          >
            {{ tag }}
          </p>
        </div>
      </div>
      <div class="bg-[#FAFBFE] p-4  grid grid-cols-7 gap-4">
        <div
          class="text-white p-2 bg-[rgba(98,204,211,0.2)]  rounded-md flex items-center flex-col relative h-[130px]"
          *ngFor="let tag of licenseData.otherTags"
        >
          <div
            class="absolute -top-2 -right-2  px-2 p-1 rounded-full text-sm font-bold bg-[#39B6CC] text-white "
          >
            {{ tag.number }}
          </div>
          <img [src]="tag.image" class="h-full" />
          <p class="text-[#2190A4] font-bold  text-center">
            {{ tag.title }}
          </p>
        </div>
      </div>
      <div class="bg-[#FAFBFE] px-4 flex gap-4 w-full">
        <div class="w-[20%] bg-white rounded-md">fadsf</div>
        <div class="w-[80%] bg-white rounded-md p-4 flex gap-4">
          <app-license-box [oneChoice]="licenseData.data" class="w-[50%]" />
          <div class="w-[50%] p-3 shadow-sm">
            <p class="text-[#043924] text-[20px] font-bold my-2"></p>
            <div class="flex gap-3 h-full">
              <div class="h-full w-[40%]"></div>
              <div class="h-[150px] w-1 bg-[#148A92]"></div>
              <div class="flex flex-col justify-between">
                <div>
                  <p class="text-[#596574] text-sm">Total Renewals 6</p>
                </div>
                <div class="flex justify-end w-full">
                  <button
                    class="bg-[#148A92] px-4 py-1 rounded-md text-white text-[13px] font-bold"
                  >
                    Renew License
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class RenewLicenseComponent {
  licenseData = {
    id: 'LSWRC-#AJ838374-09',
    image: '../../../assets/renewLicense.png',
    tags: ['Water Analysis Complier', 'Highly Recommended', 'LSWRC Prefered'],
    otherTags: [
      {
        image: '../../../assets/otherTab1.png',
        title: 'Other Tag 1',
        number: 3,
      },
      {
        image: '../../../assets/otherTab2.png',
        title: 'Other Tag 2',
        number: 3,
      },
      {
        image: '../../../assets/otherTab3.png',
        title: 'Other Tag 2',
        number: 3,
      },
      {
        image: '../../../assets/otherTab4.png',
        title: 'Other Tag 2',
        number: 3,
      },
      {
        image: '../../../assets/otherTab2.png',
        title: 'Other Tag 2',
        number: 3,
      },
      {
        image: '../../../assets/otherTab3.png',
        title: 'Other Tag 2',
        number: 3,
      },
      {
        image: '../../../assets/otherTab4.png',
        title: 'Other Tag 2',
        number: 3,
      },
    ],
    data: {
      image: '../../../assets/licenseImage.png',
      title: 'License 2',
      activities: 134,
      tags: ['Tag3', 'Tag4'],
      rating: 3.8,
      reviews: 80,
      lever: 2,
      body: 'Description of License 2.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
  };
}
