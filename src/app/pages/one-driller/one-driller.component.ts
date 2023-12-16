import { Component } from '@angular/core';

@Component({
  selector: 'app-one-driller',
  standalone: true,
  imports: [],
  template: `
    <div class="bg-[#E7F4F5] p-3">
      <div class="bg-white p-4 rounded-md flex  justify-between gap-5">
        <div class="flex gap-5 items-center">
          <img src="../../../assets/dummyLogo.png" alt="" class="w-[150px]"/>
          <div class="text-[#121212] text-center">
            <p class="text-3xl">Hyrdo Engineering Service Limited</p>
            <p>Lorem ipsum dolor sit amet consectetur. Sed consequat.</p>
          </div>
        </div>
        <div class="flex flex-col gap-2 text-sm text-[#121212] ">
          <div class="flex gap-2 items-center">
            <img src="../../../assets/locationBlue.svg" alt="" />
            <p>a31 Obafemi Awolowo way Off Allen Round About Ikeja, Lagos.</p>
          </div>
          <div class="flex gap-2 items-center">
            <img src="../../../assets/phoneBlue.svg" alt="" />
            <p>+1 (123) 123 1234</p>
          </div>
          <div class="flex gap-2 items-center">
            <img src="../../../assets/websiteBlue.svg" alt="" />
            <p>www.hydroeng.com</p>
          </div>
          <div class="flex gap-2 items-center">
            <img src="../../../assets/emailBlue.svg" alt="" />
            <p>hydroeng&#64;gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class OneDrillerComponent {}
