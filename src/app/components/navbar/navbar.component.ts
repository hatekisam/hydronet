import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <div class="w-screen">
      <div class="h-4 w-full bg-[#63CCD3]"></div>
      <div class="px-20 py-2">
        <div class="flex justify-between">
          <div class="flex items-center gap-4">
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Mission</a>
            <a href="">Staffs</a>
            <a href="">Report</a>
            <a href="">Contact US</a>
          </div>
          <button
            class="px-4 py-1 bg-[#158BA0] text-white font-semibold rounded-full"
          >
            Fri fragt på alle order over 1000kr
          </button>
        </div>
      </div>
      <div class="h-3 w-full bg-[#D1F4F7]"></div>
    </div>
  `,
})
export class NavbarComponent {}
