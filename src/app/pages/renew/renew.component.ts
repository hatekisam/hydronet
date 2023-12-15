import { Component } from '@angular/core';
import { HomeSidebarComponent } from '../../components/home-sidebar/home-sidebar.component';

@Component({
  selector: 'app-renew',
  standalone: true,
  imports: [HomeSidebarComponent],
  template: `
    <div
      class="bg-[url('/assets/homeImage.png')]   bg-no-repeat h-screen w-screen flex items-center justify-center flex-col px-28  bg-cover "
    >
      <app-home-sidebar />
      <p class=" text-[#96E8EE] text-4xl font-extrabold mb-10">
        Borehole Driller License Renewal
        <span class="text-[#19B6D1]">Lagos State</span>
      </p>
      <p
        class="text-[#CBE8EA]  w-[80%] text-center text-2xl font-extrabold "
      >
        LSWRC Renewal Borehole drilling must be carried out by certified
        Drillers.
      </p>
      <p class="text-[#CAE8EA] my-3 w-[80%] text-center">
        Enter you Lagos State Water Regulatory Commssions’ Issued Identification
        Number
      </p>
      <div class="p-5 rounded-xl bg-[#D1F4F7] border  my-4">
        <p class="text-xl text-[#262729] font-bold mb-3">License Renewal</p>
        <div
          class="flex items-center gap-2  border-2 border-gray-700 bg-white py-1 px-2 rounded-full h-[50px] pl-5 "
        >
          <img src="../../../assets/locFil.svg" alt="" class="w-6 h-6" />
          <input
            type="text"
            placeholder="Enter Your LSWRCUID"
            class="border-none outline-none px-4 py-2 text-sm w-[350px]"
          />
          <button
            class="flex items-center gap-4 px-4 py-1 bg-[#63CCD3] rounded-full text-white font-bold"
          >
            <img src="../../../assets/search.svg" alt="" class="w-5 h-5" />
            <p class="text-[12px]">Search</p>
          </button>
        </div>
      </div>
      <div
        class=" bg-[rgba(98,204,211,0.75)] p-5 flex items-center rounded-3xl gap-5 shadow-md shadow-gray-200"
      >
        <div class="flex  gap-2">
          <div
            class="p-2 rounded-full bg-gradient-to-r from-[#D3FFE7] to-[#EFFFF6] w-14 h-14 flex items-center justify-center"
          >
            <img src="../../../assets/people.svg" alt="" class="w-9 h-9" />
          </div>
          <div>
            <p class="text-white text-xs font-bold">Total Driller Licesnse</p>
            <p class="text-[#235C66] text-xl font-bold">6,000</p>
            <p class="text-[#C6E0FF] text-sm">
              <span class="text-[#2190A4]">16%</span> this month
            </p>
          </div>
        </div>
        <div class="h-full w-0.5 bg-[#F0F0F0]"></div>
        <div class="flex items-center gap-2">
          <div
            class="p-2 rounded-full bg-gradient-to-r from-[#D3FFE7] to-[#EFFFF6] w-14 h-14 flex items-center justify-center"
          >
            <img src="../../../assets/people.svg" alt="" class="w-9 h-9" />
          </div>
          <div>
            <p class="text-white text-xs font-bold">Active Licesnse</p>
            <p class="text-[#235C66] text-xl font-bold">1823</p>
            <p class="text-[#C6E0FF] text-sm">
              <span class="text-[#D0004B]">16%</span>this month
            </p>
          </div>
        </div>
        <div class="h-full w-0.5 bg-[#F0F0F0]"></div>
        <div class="flex items-center gap-2">
          <div
            class="p-2 rounded-full bg-gradient-to-r from-[#D3FFE7] to-[#EFFFF6] w-14 h-14 flex items-center justify-center"
          >
            <img src="../../../assets/people.svg" alt="" class="w-9 h-9" />
          </div>
          <div>
            <p class="text-white text-xs font-bold">Expired Licesnse</p>
            <p class="text-[#235C66] text-xl font-bold">1823</p>
            <p class="text-[#C6E0FF] text-sm">
              <span class="text-[#D0004B]">16%</span>this month
            </p>
          </div>
        </div>
        <div class="h-full w-0.5 bg-[#F0F0F0]"></div>
        <div class="flex items-center gap-2">
          <div
            class="p-2 rounded-full bg-gradient-to-r from-[#D3FFE7] to-[#EFFFF6] w-14 h-14 flex items-center justify-center"
          >
            <img src="../../../assets/drillers.svg" alt="" class="w-9 h-9" />
          </div>
          <div>
            <p class="text-white text-xs font-bold">Active Drillers</p>
            <p class="text-[#235C66] text-xl font-bold">1823</p>
            <p class="text-[#C6E0FF] text-sm">
              <span class="text-[#D0004B]">16%</span>this month
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './renew.component.css',
})
export class RenewComponent {}
