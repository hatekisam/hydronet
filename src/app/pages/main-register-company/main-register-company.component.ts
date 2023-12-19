import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MainRegComp1Component } from '../../components/main-reg-comp1/main-reg-comp1.component';
import { MainRegComp2Component } from '../../components/main-reg-comp2/main-reg-comp2.component';
import { MainRegComp3Component } from '../../components/main-reg-comp3/main-reg-comp3.component';

@Component({
  selector: 'app-main-register-company',
  standalone: true,
  imports: [
    CommonModule,
    MainRegComp1Component,
    MainRegComp2Component,
    MainRegComp3Component,
  ],
  template: `
    <div class="h-full">
      <div *ngIf="activeTab == 0" class="h-full">
        <app-main-reg-comp1  />
      </div>
      <div *ngIf="activeTab == 1">
        <app-main-reg-comp2  />
      </div>
      <div *ngIf="activeTab == 3">
        <app-main-reg-comp3  />
      </div>
      <!-- <div *ngIf="activeTab == 4">
        <app-main-reg-comp4 [changeTab]="changeTab" />
      </div> -->
    </div>
  `,
})
export class MainRegisterCompanyComponent {
  activeTab = 1;
  changeTab(event: any) {
    // Change activeTab directly
    this.activeTab = event;
  }
}
