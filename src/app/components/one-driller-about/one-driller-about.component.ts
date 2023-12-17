import { Component } from '@angular/core';

@Component({
  selector: 'app-one-driller-about',
  standalone: true,
  imports: [],
  template: `
    <div class="grid grid-cols-2 gap-5 p-4">
      <div class="bg-white p-4 rounded-lg">
        <p class="text-center font-bold text-[32px] text-[#121212] my-2">
          Company Profile
        </p>
        <div class="grid grid-cols-4 gap-2">
          <div
            class="flex flex-col gap-1 items-center bg-white p-3 rounded-md shadow-md border font-semibold"
          >
            <p class="text-sm text-[#121212] text-center">Projects Completed</p>
            <p class="text-xl  text-[#0CB9DE] text-center">123</p>
          </div>
          <div
            class="flex flex-col gap-1 items-center bg-white p-3 rounded-md shadow-md border font-semibold"
          >
            <p class="text-sm text-[#121212] text-center">Projects Completed</p>
            <p class="text-xl  text-[#0CB9DE] text-center">123</p>
          </div>
          <div
            class="flex flex-col gap-1 items-center bg-white p-3 rounded-md shadow-md border font-semibold"
          >
            <p class="text-sm text-[#121212] text-center">Projects Completed</p>
            <p class="text-xl  text-[#0CB9DE] text-center">123</p>
          </div>
          <div
            class="flex flex-col gap-1 items-center bg-white p-3 rounded-md shadow-md border font-semibold"
          >
            <p class="text-sm text-[#121212] text-center">Projects Completed</p>
            <p class="text-xl  text-[#0CB9DE] text-center">123</p>
          </div>
        </div>
        <p class="text-[#121212] mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          tenetur accusantium dignissimos id eos nemo eaque praesentium
          deserunt, nihil voluptas, laborum dolorem quo animi asperiores nobis
          corporis ipsam pariatur mollitia. Nihil, soluta? Ullam tenetur esse
          nulla odio temporibus, adipisci consequatur ratione ducimus quisquam a
          nostrum officiis animi, dignissimos error delectus quibusdam
          repellendus tempore commodi aliquid porro nesciunt possimus,
          exercitationem officia? Esse quibusdam quia distinctio, aliquid optio
          quaerat nostrum blanditiis! Aspernatur fugiat, nemo eius repudiandae
          dicta sit sapiente aut iure quaerat accusamus nisi voluptatem aperiam
          doloribus esse reprehenderit! Laboriosam, placeat modi! Aspernatur,
          perferendis? Neque nisi alias enim voluptates, temporibus minus
          exercitationem explicabo quidem autem ex, nobis dolorum assumenda aut
          cupiditate, accusantium nam excepturi sit nulla repudiandae. Molestias
          sequi totam tempore voluptatem! Necessitatibus saepe exercitationem
          commodi id obcaecati expedita facilis provident vel illo aspernatur
          dolorum, atque iusto laboriosam a quia fugit quisquam vero corporis
          enim nobis, temporibus sint hic! Iure, odio praesentium. Sequi
          provident deserunt ipsum saepe optio! Tempore sed nobis, culpa
          officiis, sint eveniet, maiores voluptatem non dolore est ex iusto
          pariatur iure commodi recusandae sapiente totam quas explicabo cumque.
          Quas! Dolorum minus quaerat omnis, laudantium perspiciatis, incidunt
          praesentium eius possimus voluptatum quasi facilis voluptatem!
          Aliquid, harum. Pariatur, doloremque. A, sit quis non cum ea quasi
          impedit blanditiis ab similique temporibus! Quisquam, recusandae
          delectus. Ipsa aperiam quidem culpa placeat nesciunt itaque. Similique
          nemo libero consequuntur rerum quidem nulla quia aliquid animi eius,
          fugiat illum praesentium ratione provident numquam dolorem nobis
          corporis! Rem nesciunt est reiciendis unde praesentium in aperiam
          reprehenderit quasi accusamus, odit voluptate aspernatur asperiores
          libero labore quod? A voluptas facere accusantium totam enim nam
          reprehenderit at consectetur, eius quaerat. Corporis, quidem
          consequuntur unde, animi eaque similique assumenda numquam dolore
          cupiditate expedita voluptate iure delectus quisquam id, ipsum saepe
          eum officia? Impedit est sapiente repellendus voluptatibus vel quam,
          praesentium aperiam.
        </p>
      </div>
      <div>
        <div class="bg-white p-4 rounded-lg flex items-center gap-3">
          <div class="w-[60%]">
            <p class="text-[#121212]">LSWRC Ratinig</p>
            <div class="flex gap-2 items-center">
              <img src="../../../assets/onBoarding.svg" alt="" />
              <p>Onboarding</p>
              <div class="relative w-[100px] bg-gray-100 h-2 rounded-full">
                <div
                  class="absolute top-0 left-0 bg-[#0CB9DE] w-[85%] h-full rounded-full"
                ></div>
              </div>
              <p>8.5</p>
            </div>
            <div class="flex gap-2 items-center">
              <img src="../../../assets/responsiveness.svg" alt="" />
              <p>Responsiveness</p>
              <div class="relative w-[100px] bg-gray-100 h-2 rounded-full">
                <div
                  class="absolute top-0 left-0 bg-[#0CB9DE] w-[85%] h-full rounded-full"
                ></div>
              </div>
              <p>8.5</p>
            </div>
            <div class="flex gap-2 items-center">
              <img src="../../../assets/communication.svg" alt="" />
              <p>Communication</p>
              <div class="relative w-[100px] bg-gray-100 h-2 rounded-full">
                <div
                  class="absolute top-0 left-0 bg-[#0CB9DE] w-[85%] h-full rounded-full"
                ></div>
              </div>
              <p>8.5</p>
            </div>
            <div class="flex gap-2 items-center">
              <img src="../../../assets/tenant.svg" alt="" />
              <p>Tenant Experience</p>
              <div class="relative w-[100px] bg-gray-100 h-2 rounded-full">
                <div
                  class="absolute top-0 left-0 bg-[#0CB9DE] w-[85%] h-full rounded-full"
                ></div>
              </div>
              <p>8.5</p>
            </div>
            <div class="flex gap-2 items-center">
              <img src="../../../assets/landlord.svg" alt="" />
              <p>Landlord Experience</p>
              <div class="relative w-[100px] bg-gray-100 h-2 rounded-full">
                <div
                  class="absolute top-0 left-0 bg-[#0CB9DE] w-[85%] h-full rounded-full"
                ></div>
              </div>
              <p>8.5</p>
            </div>
          </div>
          <div class="w-[40%]">
            <p class="text-base font-bold mb-3 text-center">Social Profiles</p>
            <div class="flex gap-4 justify-center">
              <a href="">
                <img
                  src="../../../assets/twitterBlue.svg"
                  alt=""
                  class="w-10 h-10"
                />
              </a>
              <a href="">
                <img
                  src="../../../assets/whatsappBlue.svg"
                  alt=""
                  class="w-10 h-10"
                />
              </a>
              <a href="">
                <img
                  src="../../../assets/linkedInBlue.svg"
                  alt=""
                  class="w-10 h-10"
                />
              </a>
              <a href="">
                <img
                  src="../../../assets/facebookBlue.svg"
                  alt=""
                  class="w-10 h-10"
                />
              </a>
              <a href="">
                <img
                  src="../../../assets/instargramBlue.svg"
                  alt=""
                  class="w-10 h-10"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="bg-white p-4 rounded-lg mt-4">
          <div class="flex justify-between items-center">
          <div class=" p-3 text-center">
            <div class="flex gap-2  justify-center items-center">
              <p class="text-[#0CB9DE] text-6xl font-bold">5</p>
              <div class="text-[#121212]">
                <p class="font-bold">Excellent</p>
                <p class="text-xs">158 reveiws</p>
              </div>
            </div>
            <div class="flex gap-2 justify-center items-center">
              <img src="../../../assets/star.svg" alt="" class="w-5 h-5" />
              <img src="../../../assets/star.svg" alt="" class="w-5 h-5" />
              <img src="../../../assets/star.svg" alt="" class="w-5 h-5" />
              <img src="../../../assets/star.svg" alt="" class="w-5 h-5" />
              <img src="../../../assets/star.svg" alt="" class="w-5 h-5" />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class OneDrillerAboutComponent {}
