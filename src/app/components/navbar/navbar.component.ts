import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <div class="w-screen">
      <div class="h-4 w-full bg-[#63CCD3]"></div>
      <div class="px-20 py-2 bg-white">
        <div class="flex justify-between">
          <div class="flex items-center gap-4">
            <a href="" class="flex gap-2 items-center">
              <img src="/assets/downArrow.svg" alt="" />
              <p>Home</p>
            </a>
            <a href="" class="flex gap-2 items-center">
              <img src="/assets/aboutUs.svg" alt="" />
              <p>About Us</p>
            </a>
            <a href="" class="flex gap-2 items-center">
              <img src="/assets/mission.svg" alt="" />
              <p>Mission</p>
            </a>
            <a href="" class="flex gap-2 items-center">
              <img src="/assets/staff.svg" alt="" />
              <p>Staffs</p>
            </a>
            <a href="" class="flex gap-2 items-center">
              <img src="/assets/report.svg" alt="" />
              <p>Report</p>
            </a>
            <a href="" class="flex gap-2 items-center">
              <img src="/assets/contact.svg" alt="" />
              <p>Contact Us</p>
            </a>
            <button
              class="px-4 py-1 bg-[#63CCD3] text-white font-semibold rounded-md flex items-center gap-2"
            >
              <img src="/assets/pcPlatform.svg" alt="" />
              <p>Pc Platfrom</p>
            </button>
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
