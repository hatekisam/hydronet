import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-reg-comp3',
  standalone: true,
  imports: [],
  template: `<div>
    <button (click)="changeTab(0)">To Tab1</button>
  </div> `,
})
export class MainRegComp3Component {
  @Input() changeTab!: (num: number) => void;
}
