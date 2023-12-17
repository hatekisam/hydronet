import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <div class="bg-[#21484F] p-5 text-white mx-1">
      <div class="mx-4 bg-white h-1 rounded-full"></div>
      <div class="flex  flex-col md:flex-row gap-5 justify-between px-6 py-3">
        <div>
          <p class="text-xl font-extrabold mb-3">Services</p>
          <div class="flex flex-col gap-2">
            <p class="font-semibold">Bike and Rickshaw rental</p>
            <p class="font-semibold">Guided Tours of Lucca</p>
            <p class="font-semibold">Guided Bike Tour of Lucca</p>
            <p class="font-semibold">Trip In The Tuscan Hills</p>
            <p class="font-semibold">Transportation With Luxury Cars</p>
            <p class="font-semibold">Wine Tours By Bus With Guide</p>
          </div>
        </div>
        <div>
          <p class="text-xl font-extrabold mb-3">Home</p>
          <div class="flex flex-col gap-2">
            <p class="font-semibold">Home</p>
            <p class="font-semibold">About Us</p>
            <p class="font-semibold">Tour Packages</p>
          </div>
        </div>
        <div>
          <p class="text-xl font-extrabold mb-3">Help</p>
          <div class="flex flex-col gap-2">
            <p class="font-semibold">Terms of Use</p>
            <p class="font-semibold">Provicy Policy</p>
          </div>
        </div>
        <div>
          <p class="text-xl font-extrabold mb-3">Contacts</p>
          <div class="flex flex-col gap-2">
            <div class="flex gap-2 items-center">
              <img src="../../../assets/location.svg" alt="" class="w-5 h-5" />
              <p class="font-semibold">Piazza Napoleone, Lucca, Tuscany</p>
            </div>
            <div class="flex gap-2 items-center">
              <img src="../../../assets/phone.svg" alt="" class="w-5 h-5" />
              <p class="font-semibold">+39 346 368 5708</p>
            </div>
            <div class="flex gap-2 items-center">
              <img src="../../../assets/email.svg" alt="" class="w-5 h-5" />
              <p class="font-semibold">italiainlimo&#64;gmail.com</p>
            </div>
          </div>
        </div>
        <div>
          <p class="text-xl font-extrabold mb-3 text-center">Social Media</p>
          <div class="flex gap-4 justify-center">
            <a href="">
              <img src="../../../assets/twitter.svg" alt="" class="w-10 h-10" />
            </a>
            <a href="">
              <img src="../../../assets/facebook.svg" alt="" class="w-10 h-10" />
            </a>
            <a href="">
              <img
                src="../../../assets/instargram.svg"
                alt=""
                class="w-10 h-10"
              />
            </a>
          </div>
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
