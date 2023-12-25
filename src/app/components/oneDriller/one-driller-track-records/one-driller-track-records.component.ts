import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-one-driller-track-records',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white p-4 rounded-b-xl text-[#121212] py-40">
      <div
        class="mx-5 py-3 px-2 bg-[#E7F4F5] text-[#0CB9DE] rounded-full text-xs font-bold flex gap-4"
      >
        <div
          class="relative w-fit px-10"
          *ngFor="let year of years; let i = index"
        >
          <p>{{ year.year }}</p>
          <div
            [ngClass]="{
              absolute: true,
              'bottom-[170%]': i % 2 !== 0,
              'top-[170%]': i % 2 === 0
            }"
            class=" w-[150px]  left-1/2 transform translate-x-1/2"
          >
            <div *ngIf="i % 2 === 0; else up">
              <img
                [src]="
                  i % 2 === 0
                    ? '../../../assets/downTrack.svg'
                    : '../../../assets/upTrack.svg'
                "
              />
              <p class="text-[#0CB9DE]">{{ year.title }}</p>
              <p class="text-black font-normal">{{ year.body }}</p>
            </div>
          </div>
          <ng-template #up>
            <div>
              <p class="text-[#0CB9DE]">{{ year.title }}</p>
              <p class="text-black font-normal">{{ year.body }}</p>
              <img
                [src]="
                  i % 2 === 0
                    ? '../../../assets/downTrack.svg'
                    : '../../../assets/upTrack.svg'
                "
              />
            </div>
          </ng-template>
          <!-- <div
            [ngClass]="{
              absolute: true,
              'bottom-[250%]': i % 2 !== 0,
              'top-[250%]': i % 2 === 0
            }"
            class="text-center  w-[150px] left-1/2 transform translate-x-1/2"
          >
            
          </div> -->
        </div>
      </div>
    </div>
  `,
})
export class OneDrillerTrackRecordsComponent {
  years = [
    {
      year: '2012',
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet consectetur. Luctus cursus.',
    },
    {
      year: '2013',
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet consectetur. Luctus cursus.',
    },
    {
      year: '2014',
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet consectetur. Luctus cursus.',
    },
    {
      year: '2015',
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet consectetur. Luctus cursus.',
    },
    {
      year: '2016',
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet consectetur. Luctus cursus.',
    },
    {
      year: '2017',
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet consectetur. Luctus cursus.',
    },
    {
      year: '2018',
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet consectetur. Luctus cursus.',
    },
    {
      year: '2019',
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet consectetur. Luctus cursus.',
    },
    {
      year: '2020',
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet consectetur. Luctus cursus.',
    },
    {
      year: '2021',
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet consectetur. Luctus cursus.',
    },
    {
      year: '2022',
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet consectetur. Luctus cursus.',
    },
    {
      year: '2023',
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet consectetur. Luctus cursus.',
    },
    {
      year: '2024',
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet consectetur. Luctus cursus.',
    },
    {
      year: '2025',
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet consectetur. Luctus cursus.',
    },
  ];
}
