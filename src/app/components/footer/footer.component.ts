import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <div class="bg-[#21484F] p-5 text-white">
      <div class="mx-4 bg-white h-1 rounded-full"></div>
      <div class="flex gap-10">
        <div>
          <p class="text-xl font-extrabold">Services</p>
          <p class="font-semibold">Bike and Rickshaw rental</p>
          <p class="font-semibold">Guided Tours of Lucca</p>
          <p class="font-semibold">Guided Bike Tour of Lucca</p>
          <p class="font-semibold">Trip In The Tuscan Hills</p>
          <p class="font-semibold">Transportation With Luxury Cars</p>
          <p class="font-semibold">Wine Tours By Bus With Guide</p>
        </div>
        <div>
          <p class="text-xl font-extrabold">Home</p>
          <p class="font-semibold">Home</p>
          <p class="font-semibold">About Us</p>
          <p class="font-semibold">Tour Packages</p>
        </div>
        <div>
          <p class="text-xl font-extrabold">Help</p>
          <p class="font-semibold">Terms of Use</p>
          <p class="font-semibold">Provicy Policy</p>
        </div>
        <div>
          <p class="text-xl font-extrabold">Services</p>
          <p class="font-semibold">Bike and Rickshaw rental</p>
          <p class="font-semibold">Guided Tours of Lucca</p>
          <p class="font-semibold">Guided Bike Tour of Lucca</p>
          <p class="font-semibold">Trip In The Tuscan Hills</p>
          <p class="font-semibold">Transportation With Luxury Cars</p>
          <p class="font-semibold">Wine Tours By Bus With Guide</p>
        </div>
      </div>
      <div class="mx-4 bg-white h-0.5 rounded-full"></div>
      <p class="text-center w-full py-3">
        Copyright © {{ currentYear }}. All rights reserved.
      </p>
    </div>
  `,
})
export class FooterComponent {
  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }
}
