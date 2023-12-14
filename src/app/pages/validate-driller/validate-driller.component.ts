import { Component } from '@angular/core';

@Component({
  selector: 'app-validate-driller',
  standalone: true,
  imports: [],
  template: `
    <div
      class=" bg-[url('/assets/homeImage.png')] h-screen w-screen flex items-center justify-center flex-col px-28"
    >
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
        borehole water Drillers with the LSWRC for your borehole water Drilling
        needs.
      </p>
      <div class="p-3 rounded-xl bg-[#D1F4F7] border  my-4">
        <div class="flex justify-between items-center gap-20">
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
          <div class="flex items-center gap-2">
            
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './validate-driller.component.css',
})
export class ValidateDrillerComponent {}
