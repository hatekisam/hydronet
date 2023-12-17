import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-reg-comp1',
  standalone: true,
  imports: [],
  template: `
    <div class="p-5 h-full overflow-y-auto">
      <div class="flex items-center justify-center">
        <img src="../../../assets/companyRegProgress1.png" alt="" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dicta
        eius dolor atque unde, ex qui consequuntur adipisci optio nemo? Amet,
        suscipit eos? Eum fugit placeat architecto. Ullam, asperiores
        aspernatur. Autem modi nesciunt amet reprehenderit fuga atque non
        voluptatibus, sed veritatis eveniet quasi necessitatibus, dolor neque
        perspiciatis, maiores dolorem nobis eaque. Maxime quae blanditiis vero
        nulla necessitatibus hic a quo? Iusto, itaque, deserunt amet ut
        praesentium vitae suscipit quisquam magni unde atque asperiores nesciunt
        beatae esse quo architecto incidunt vero officiis exercitationem
        corrupti, numquam ea! Sunt dolores sapiente reprehenderit officiis! Quis
        optio blanditiis est ratione, doloremque architecto id eum porro
        recusandae, voluptatibus numquam beatae, vel laborum. Molestias, numquam
        iure! Culpa dolorem iste a nisi quae dignissimos atque officia
        necessitatibus itaque? Laboriosam mollitia dignissimos expedita
        temporibus molestiae aspernatur nulla dolor ducimus eos nam laborum
        voluptatibus atque est, cum exercitationem, adipisci, minima qui vero
        libero. Est atque repellendus obcaecati animi, odio quibusdam?
        Voluptatem eum error itaque blanditiis, nesciunt, quod doloremque sunt
        quia quasi minus iure ratione fugiat pariatur voluptate enim mollitia id
        tenetur sint assumenda. Voluptatem praesentium ipsam quia, dolores earum
        vitae! Odio sapiente hic officiis sequi soluta. Itaque voluptatibus sed
        eum illo consectetur nisi, optio, error doloremque id quisquam autem at,
        sequi inventore maiores impedit eius. Qui ratione inventore illo a. Nam
        iste asperiores esse amet a velit praesentium facilis, dolores ipsa
        veniam voluptatum culpa, ipsum excepturi sapiente quisquam perspiciatis
        maiores expedita adipisci labore incidunt, aut quis. Atque rerum odit
        ratione. Reiciendis blanditiis debitis dolorem accusamus voluptates
        laboriosam nulla animi asperiores aspernatur fuga quo corrupti esse
        corporis expedita id quae quibusdam veritatis, beatae at, voluptate et,
        sint sequi ullam perferendis! Et. Atque nihil error iusto, ducimus
        voluptas quod eveniet! Voluptates nisi consequatur dolorum dolore
        quisquam adipisci ipsum? Voluptas deserunt quibusdam facere deleniti
        harum, soluta dicta ex nobis, hic esse numquam ducimus! Atque ratione
        repellendus placeat, ut ad rerum non consequuntur quis natus omnis
        voluptatum voluptatibus et! Hic error consequatur porro ut rerum quidem!
        Minima atque rerum odit. Odit nostrum cupiditate culpa. Veritatis
        consequuntur est quaerat esse totam quasi repudiandae praesentium
        recusandae magni dolor! Voluptates quae laborum cupiditate labore sed,
        eveniet dicta repellat voluptatum animi voluptatibus quia praesentium
        tempore? Hic, fuga vero. Ipsa exercitationem, facere beatae eius numquam
        maiores aliquid sed at accusantium dolor atque explicabo? Ea aliquam
        consectetur, veritatis repellendus delectus quam dolores blanditiis nemo
        recusandae eius necessitatibus earum reprehenderit animi. Quis quod
        minima animi consequatur ab doloribus tenetur saepe numquam eum. Eveniet
        asperiores nobis sequi dolor omnis blanditiis doloribus atque eum
        accusamus. Laborum aut perferendis quae eos vitae animi voluptate!
        Laudantium fugiat voluptate, eveniet hic libero enim asperiores
        provident cumque voluptates! Fugit exercitationem dolore rem, quaerat
        modi consequatur, qui, laudantium earum quo dicta a repudiandae at
        laboriosam possimus ipsum laborum! Debitis accusamus a quisquam
        voluptatibus similique numquam perferendis animi dolorum. Impedit
        suscipit corporis qui ratione quasi. Sequi id corporis veritatis,
        ducimus, quam quaerat nobis odit ad, possimus harum rem optio! Itaque
        tempore repellendus commodi quia earum quo iure vel facilis. Nesciunt
        exercitationem dignissimos magni laudantium molestias nam maiores minus
        ipsum necessitatibus consequuntur! Dolore nam reprehenderit repellendus?
        Quod, laboriosam nam. Accusantium. Ullam, quidem quibusdam, veniam
        expedita necessitatibus mollitia, recusandae quisquam vel eligendi nisi
        dolorum modi placeat ipsa vero. Dolorem, placeat sed qui tempore itaque
        suscipit debitis fugit reprehenderit quod, odit aliquid? Vel, blanditiis
        rerum. Repellendus, eligendi quidem non laudantium sequi eum
        voluptatibus! Adipisci iure laboriosam culpa quidem saepe consequuntur
        pariatur neque, numquam reiciendis ipsam excepturi nobis sunt deleniti
        repellendus commodi dolores. Fugit tempora ea magnam, libero commodi,
        aliquid, deserunt consequuntur nam nobis at eos nisi debitis tenetur
        dolor cumque delectus quis. Tempore dolore id corporis reprehenderit,
        quo expedita sequi! Culpa, vitae?
      </p>
      <div class="bg-white p-4 rounded-b-xl px-5">
        <div class="flex gap-5 rounded-3xl border p-4 shadow-md  px-16">
          <div class="w-[50%]">
            <p class="text-[#121212] text-[32px] font-bold">
              Get in <span class="text-[#0CB9DE]">touch</span>
            </p>
            <p class="text-[#121212] text-[11px]">
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
              leo molestie vel, ornare non id blandit netus.
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
          <div class="w-[50%] border-[30px] border-[#0CB9DE]">
            <p>Map</p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class MainRegComp1Component {
  @Output() changeTab = new EventEmitter<number>();
  toOtherTab(num: number) {
    this.changeTab.emit(num);
  }
}
