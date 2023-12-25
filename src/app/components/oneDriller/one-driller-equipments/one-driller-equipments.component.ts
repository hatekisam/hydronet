import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-one-driller-equipments',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col md:flex-row gap-5 p-4">
      <div class="bg-white p-4 rounded-lg w-full md:w-[70%]">
        <p class="text-center font-bold text-[25px] text-[#0CB9DE] my-2">
          {{ equipments[activeEquip].title }}
        </p>
        <div class="grid grid-cols-4 gap-2">
          <div
            class="bg-white "
            *ngFor="let img of equipments[activeEquip].images"
          >
            <img [src]="img" class="w-full" />
          </div>
        </div>
        <p class="text-[#121212] text-[20px]">
          <span class="text-[24px] font-bold">Status</span>
          {{ equipments[activeEquip].status }}
        </p>
        <p class="text-[#121212]">
          <span class="text-[24px] font-bold">Description</span>
        </p>
        <p class="text-[#121212] ">{{ equipments[activeEquip].description }}</p>
      </div>
      <div class="w-full md:w-[30%]">
        <div class="bg-white p-4 rounded-lg ">
          <p class="text-black font-bold">Human Workforce</p>
          <div class="grid grid-cols-3 gap-2">
            <div
              class="flex flex-col gap-1 items-center bg-white p-3 rounded-md shadow-md border font-semibold"
            >
              <p class="text-sm text-[#121212] text-center">Total Workfoce</p>
              <p class="text-xl  text-[#0CB9DE] text-center">123</p>
            </div>
            <div
              class="flex flex-col gap-1 items-center bg-white p-3 rounded-md shadow-md border font-semibold"
            >
              <p class="text-sm text-[#121212] text-center">
                Workforce in Projects
              </p>
              <p class="text-xl  text-[#0CB9DE] text-center">12</p>
            </div>
            <div
              class="flex flex-col gap-1 items-center bg-white p-3 rounded-md shadow-md border font-semibold"
            >
              <p class="text-sm text-[#121212] text-center">
                Workforce Available
              </p>
              <p class="text-xl  text-[#0CB9DE] text-center">$123</p>
            </div>
          </div>
        </div>
        <div class="bg-white p-4 rounded-lg mt-4 text-sm">
          <p class="font-bold text-lg">Equipments’ List</p>
          <button
            (click)="goToEquip(i)"
            class="flex justify-between w-full items-center"
            *ngFor="let eq of equipments; let i = index"
          >
            <p [style.color]="isSelectedEquipment(i) ? '#0CB9DE' : 'black'">
              {{ eq.title }}
            </p>
            <img
              *ngIf="eq.ticked; else uncheckedImage"
              src="../../../assets/checked.svg"
              alt="Checked Icon"
            />
            <ng-template #uncheckedImage>
              <img
                src="../../../assets/unchecked.svg"
                alt="Unchecked Icon"
              />
            </ng-template>
          </button>
        </div>
      </div>
    </div>
  `,
})
export class OneDrillerEquipmentsComponent {
  activeEquip = 0;
  equipments = [
    {
      title: 'APCOM Mouted -Truck Coring Drill Rig',
      ticked: true,
      images: [
        '../../../assets/equip1.png',
        '../../../assets/equip2.png',
        '../../../assets/equip3.png',
        '../../../assets/equip4.png',
      ],
      status: 'Functional',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,tenetur accusantium dignissimos id eos nemo eaque praesentiumdeserunt, nihil voluptas, laborum dolorem quo animi asperiores nobiscorporis ipsam pariatur mollitia. Nihil, soluta? Ullam tenetur essenulla odio temporibus, adipisci consequatur ratione ducimus quisquam anostrum officiis animi, dignissimos error delectus quibusdamrepellendus tempore commodi aliquid porro nesciunt possimus,exercitationem officia? Esse quibusdam quia distinctio, aliquid optio',
    },
    {
      title: 'APCOM rotary water well drill',
      ticked: false,
      images: [
        '../../../assets/equip3.png',
        '../../../assets/equip4.png',
        '../../../assets/equip1.png',
        '../../../assets/equip2.png',
      ],
      status: 'Non Functional',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,tenetur accusantium dignissimos id eos nemo eaque praesentiumdeserunt, nihil voluptas, laborum dolorem quo animi asperiores nobiscorporis ipsam pariatur mollitia. Nihil, soluta? Ullam tenetur essenulla odio temporibus, adipisci consequatur ratione ducimus quisquam anostrum officiis animi, dignissimos error delectus quibusdamrepellendus tempore commodi aliquid porro nesciunt possimus,exercitationem officia? Esse quibusdam quia distinctio, aliquid optio',
    },
    {
      title: 'APCOM Mouted -Truck Coring Drill Rig',
      ticked: true,
      images: [
        '../../../assets/equip1.png',
        '../../../assets/equip2.png',
        '../../../assets/equip3.png',
        '../../../assets/equip4.png',
      ],
      status: 'Functional',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,tenetur accusantium dignissimos id eos nemo eaque praesentiumdeserunt, nihil voluptas, laborum dolorem quo animi asperiores nobiscorporis ipsam pariatur mollitia. Nihil, soluta? Ullam tenetur essenulla odio temporibus, adipisci consequatur ratione ducimus quisquam anostrum officiis animi, dignissimos error delectus quibusdamrepellendus tempore commodi aliquid porro nesciunt possimus,exercitationem officia? Esse quibusdam quia distinctio, aliquid optio',
    },
    {
      title: 'APCOM rotary water well drill',
      ticked: false,
      images: [
        '../../../assets/equip3.png',
        '../../../assets/equip4.png',
        '../../../assets/equip1.png',
        '../../../assets/equip2.png',
      ],
      status: 'Non Functional',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,tenetur accusantium dignissimos id eos nemo eaque praesentiumdeserunt, nihil voluptas, laborum dolorem quo animi asperiores nobiscorporis ipsam pariatur mollitia. Nihil, soluta? Ullam tenetur essenulla odio temporibus, adipisci consequatur ratione ducimus quisquam anostrum officiis animi, dignissimos error delectus quibusdamrepellendus tempore commodi aliquid porro nesciunt possimus,exercitationem officia? Esse quibusdam quia distinctio, aliquid optio',
    },
    {
      title: 'APCOM Mouted -Truck Coring Drill Rig',
      ticked: true,
      images: [
        '../../../assets/equip1.png',
        '../../../assets/equip2.png',
        '../../../assets/equip3.png',
        '../../../assets/equip4.png',
      ],
      status: 'Functional',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,tenetur accusantium dignissimos id eos nemo eaque praesentiumdeserunt, nihil voluptas, laborum dolorem quo animi asperiores nobiscorporis ipsam pariatur mollitia. Nihil, soluta? Ullam tenetur essenulla odio temporibus, adipisci consequatur ratione ducimus quisquam anostrum officiis animi, dignissimos error delectus quibusdamrepellendus tempore commodi aliquid porro nesciunt possimus,exercitationem officia? Esse quibusdam quia distinctio, aliquid optio',
    },
    {
      title: 'APCOM rotary water well drill',
      ticked: false,
      images: [
        '../../../assets/equip3.png',
        '../../../assets/equip4.png',
        '../../../assets/equip1.png',
        '../../../assets/equip2.png',
      ],
      status: 'Non Functional',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,tenetur accusantium dignissimos id eos nemo eaque praesentiumdeserunt, nihil voluptas, laborum dolorem quo animi asperiores nobiscorporis ipsam pariatur mollitia. Nihil, soluta? Ullam tenetur essenulla odio temporibus, adipisci consequatur ratione ducimus quisquam anostrum officiis animi, dignissimos error delectus quibusdamrepellendus tempore commodi aliquid porro nesciunt possimus,exercitationem officia? Esse quibusdam quia distinctio, aliquid optio',
    },
    {
      title: 'APCOM Mouted -Truck Coring Drill Rig',
      ticked: true,
      images: [
        '../../../assets/equip1.png',
        '../../../assets/equip2.png',
        '../../../assets/equip3.png',
        '../../../assets/equip4.png',
      ],
      status: 'Functional',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,tenetur accusantium dignissimos id eos nemo eaque praesentiumdeserunt, nihil voluptas, laborum dolorem quo animi asperiores nobiscorporis ipsam pariatur mollitia. Nihil, soluta? Ullam tenetur essenulla odio temporibus, adipisci consequatur ratione ducimus quisquam anostrum officiis animi, dignissimos error delectus quibusdamrepellendus tempore commodi aliquid porro nesciunt possimus,exercitationem officia? Esse quibusdam quia distinctio, aliquid optio',
    },
    {
      title: 'APCOM rotary water well drill',
      ticked: false,
      images: [
        '../../../assets/equip3.png',
        '../../../assets/equip4.png',
        '../../../assets/equip1.png',
        '../../../assets/equip2.png',
      ],
      status: 'Non Functional',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,tenetur accusantium dignissimos id eos nemo eaque praesentiumdeserunt, nihil voluptas, laborum dolorem quo animi asperiores nobiscorporis ipsam pariatur mollitia. Nihil, soluta? Ullam tenetur essenulla odio temporibus, adipisci consequatur ratione ducimus quisquam anostrum officiis animi, dignissimos error delectus quibusdamrepellendus tempore commodi aliquid porro nesciunt possimus,exercitationem officia? Esse quibusdam quia distinctio, aliquid optio',
    },
  ];
  goToEquip(index: number) {
    this.activeEquip = index;
  }
  isSelectedEquipment(index: number): boolean {
    return this.activeEquip === index;
  }
}
