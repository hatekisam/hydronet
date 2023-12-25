import { Component } from '@angular/core';
import { RegUserAcc1Component } from '../../components/mainRegister/userAccounts/reg-user-acc1/reg-user-acc1.component';
import { RegUserAcc2Component } from '../../components/mainRegister/userAccounts/reg-user-acc2/reg-user-acc2.component';
import { RegUserAcc3Component } from '../../components/mainRegister/userAccounts/reg-user-acc3/reg-user-acc3.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-register-user-accounts',
  standalone: true,
  imports: [
    RegUserAcc1Component,
    RegUserAcc2Component,
    RegUserAcc3Component,
    CommonModule,
  ],
  template: `
    <div class="h-full">
      <div *ngIf="activeTab == 0" class="h-full">
        <reg-user-acc1 />
      </div>
      <div *ngIf="activeTab == 1">
        <reg-user-acc2 />
      </div>
      <div *ngIf="activeTab == 3">
        <reg-user-acc3 />
      </div>
    </div>
  `,
})
export class MainRegisterUserAccountsComponent {
  activeTab = 0;
  changeTab(event: any) {
    // Change activeTab directly
    this.activeTab = event;
  }
}
