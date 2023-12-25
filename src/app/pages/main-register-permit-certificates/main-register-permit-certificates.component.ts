import { Component } from '@angular/core';
import { RegDriPerCer1Component } from '../../components/mainRegister/drillerPermits-certificates/reg-dri-per-cer1/reg-dri-per-cer1.component';
import { RegDriPerCer2Component } from '../../components/mainRegister/drillerPermits-certificates/reg-dri-per-cer2/reg-dri-per-cer2.component';
import { RegDriPerCer3Component } from '../../components/mainRegister/drillerPermits-certificates/reg-dri-per-cer3/reg-dri-per-cer3.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-register-permit-certificates',
  standalone: true,
  imports: [
    RegDriPerCer1Component,
    RegDriPerCer2Component,
    RegDriPerCer3Component,
    CommonModule,
  ],
  template: `
    <div class="h-full">
      <div *ngIf="activeTab == 0" class="h-full">
        <reg-dri-per-cer1 />
      </div>
      <div *ngIf="activeTab == 1">
        <reg-dri-per-cer2 />
      </div>
      <div *ngIf="activeTab == 3">
        <reg-dri-per-cer3 />
      </div>
      <!-- <div *ngIf="activeTab == 4">
        <app-main-reg-comp4 [changeTab]="changeTab" />
      </div> -->
    </div>
  `,
})
export class MainRegisterPermitCertificatesComponent {
  activeTab = 0;
  changeTab(event: any) {
    // Change activeTab directly
    this.activeTab = event;
  }
}
