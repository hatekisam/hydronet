import { Component } from '@angular/core';

@Component({
  selector: 'app-main-register-permit-certificates',
  standalone: true,
  imports: [],
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
export class MainRegisterPermitCertificatesComponent {
  activeTab = 1;
  changeTab(event: any) {
    // Change activeTab directly
    this.activeTab = event;
  }
}
