import { Component } from '@angular/core';

@Component({
  selector: 'app-one-driller-contact',
  standalone: true,
  imports: [],
  template: `
    <div class="bg-white p-4 rounded-b-xl px-5">
      <div
        class="flex flex-col md:flex-row gap-5 rounded-3xl border p-4 shadow-md  px-6 md:px-16"
      >
        <div class="w-full md:w-[50%]">
          <p class="text-[#121212] text-[32px] font-bold">
            Get in <span class="text-[#0CB9DE]">touch</span>
          </p>
          <p class="text-[#121212] text-[11px]">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>
          <form>
            <input
              type="text"
              class="px-5 py-2  bg-inherit outline-none border-b-[#121212] border-b w-full "
              placeholder="Contact name"
            />
            <input
              type="text"
              class="px-5 py-2  bg-inherit outline-none border-b-[#121212] border-b w-full "
              placeholder="Street"
            />
            <div class="flex gap-2 items-center">
              <input
                type="text"
                class="px-5 py-2  bg-inherit outline-none border-b-[#121212] border-b w-[70%] "
                placeholder="Contact name"
              />
              <input
                type="text"
                class="px-5 py-2  bg-inherit outline-none border-b-[#121212] border-b w-[30%]"
                placeholder="Contact name"
              />
            </div>
            <input
              type="text"
              class="px-5 py-2  bg-inherit outline-none border-b-[#121212] border-b w-full "
              placeholder="Contact Phone"
            />
            <input
              type="text"
              class="px-5 py-2  bg-inherit outline-none border-b-[#121212] border-b w-full "
              placeholder="Email"
            />
            <input
              type="text"
              class="px-5 py-2  bg-inherit outline-none border-b-[#121212] border-b w-full "
              placeholder="Let's talk your idea"
            />
            <div class="flex gap-2 items-center my-2">
              <input type="checkbox" name="" id="" />
              <p class="text-[11px] text-[#121212]">
                I want to protect my data by signing an NDA
              </p>
            </div>
            <input
              type="submit"
              value="Submit"
              class="text-white bg-[#0CB9DE] w-full py-2 rounded-full font-bold"
            />
          </form>
        </div>
        <div class="w-full md:w-[50%] border-[30px] border-[#0CB9DE]">
          <iframe
          class="w-full h-full"
            style="border:0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=API_KEY
    &q=Space+Needle,Seattle+WA"
          >
          </iframe
          >
        </div>
      </div>
    </div>
  `,
})
export class OneDrillerContactComponent {}
