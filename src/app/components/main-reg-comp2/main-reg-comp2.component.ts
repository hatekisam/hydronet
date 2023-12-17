import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-reg-comp2',
  standalone: true,
  imports: [],
  template: `<div>
    <button (click)="changeTab(2)">To Tab3</button>
  </div> `,
})
export class MainRegComp2Component {
  @Input() changeTab!: (num: number) => void;
}
