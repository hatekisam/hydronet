import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FeaturedBoxComponent } from '../featured-box/featured-box.component';
import { DrillerLicenseProps } from '../../interfaces/driller-license-props';

interface Slide {
  url: string;
  title: string;
}

@Component({
  selector: 'app-featured-carousel',
  standalone: true,
  imports: [CommonModule, FeaturedBoxComponent],
  templateUrl: './featured-carousel.component.html',
  styleUrl: './featured-carousel.component.css',
})
export class FeaturedCarouselComponent {
  @Input() licenses!: DrillerLicenseProps[];
  currentIndex: number = 0;
  getCurrent() {
    return this.licenses[this.currentIndex];
  }
  getThird() {
    return this.licenses[this.currentIndex + 2];
  }
  getSecond() {
    return this.licenses[this.currentIndex + 1];
  }
  goToPrevious(): void {
    const isFirst = this.currentIndex === 0;
    const newIndex = isFirst ? this.licenses.length - 1 : this.currentIndex - 1;
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.licenses.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;
  }
  goTo(slideIndex: number): void {
    this.currentIndex = slideIndex;
  }
}
