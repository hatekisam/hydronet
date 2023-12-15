import { Component, Input } from '@angular/core';
import { StepperTabProps } from '../../interfaces/stepper-tab-props';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stepper-tab',
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="flex justify-between relative">
    <div
      class="h-1 bg-white absolute left-0 top-1/2 transform translate-y-1/2"
    ></div>
    <div *ngFor="let tab of tabs.tabTitles" class="flex flex-col gap-2">
      <div class="bg-white">{{ tabs.tabTitles.find(tab) }}</div>
      <p class="text-white">{{ tab }}</p>
    </div>
  </div>`,
})
export class StepperTabComponent {
  @Input() tabs!: StepperTabProps;
}
