import { Component } from '@angular/core';

@Component({
  selector: 'app-validate-driller',
  standalone: true,
  imports: [],
  template: `
    <div
      class=" bg-[url('/assets/homeImage.png')] h-screen w-screen flex items-center justify-center flex-col px-28"
    >
      <div
        class="absolute bg-[rgba(1,18,19,0.71)] w-screen h-screen bg-opacity-600"
      ></div>
      <div class="z-20 w-full flex items-center justify-center flex-col">
        <p class="my-5 text-[#96E8EE] text-4xl font-extrabold">
          Explore Licensed Borehole Expert in
          <span class="text-[#19B6D1]">Lagos State</span>
        </p>
        <p class="text-[#CBE8EA]  text-2xl font-extrabold my-3">
          Lagos State Water Regulation Commission (LSWRC) has mandated that all
          Borehole drilling must be carried out by certified Drillers.
        </p>
        <p class="text-[#CAE8EA]">
          You can Search and get in touch with over 3,000 registered certified
          borehole water Drillers with the LSWRC for your borehole water
          Drilling needs.
        </p>
        <div class="p-3 rounded-xl bg-[#D1F4F7] border  my-4 ">
          <div class="flex justify-between items-center gap-20 mb-4">
            <div class="flex items-center gap-2 font-bold text-xl">
              <p>FIND</p>
              <p>|</p>
              <p>Validate</p>
            </div>
            <div class="flex items-center gap-2 text-sm">
              <button>Residential</button>
              <button>Commercial</button>
              <button>Municipal</button>
              <button>Sewage</button>
            </div>
          </div>
          <div class="flex items-center">
            <div
              class="flex items-center gap-2 border-r border-r-black border-2 border-gray-700 bg-white py-1 px-2 rounded-l-full h-[100%]"
            >
              <img src="../../../assets/locFil.svg" alt="" class="w-7 h-7" />
              <select class="bg-white outline-none py-2">
                <option>Location</option>
                <option>Location</option>
                <option>Location</option>
                <option>Location</option>
              </select>
            </div>
            <div
              class="flex items-center gap-2 border-l border-l-black border-2 border-gray-700 bg-white py-1 px-2 rounded-r-full h-[50px]"
            >
              <img src="../../../assets/locFil.svg" alt="" class="w-7 h-7" />
              <input
                type="text"
                placeholder="UIDD"
                class="border-none outline-none px-4 py-2"
              />
              <button
                class="flex items-center gap-2 px-4 py-1 bg-[#63CCD3] rounded-full text-white font-bold"
              >
                <img src="../../../assets/search.svg" alt="" class="w-7 h-7" />
                <p>Search</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './validate-driller.component.css',
})
export class ValidateDrillerComponent {}
