import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-article3',
  templateUrl: './article3.component.html',
  styleUrls: ['./article3.component.scss']
})
export class Article3Component {
  constructor(private elementRef: ElementRef) {}

  // This should be in a service
  scrollToSection(): void {
    const section = this.elementRef.nativeElement.querySelector('#section-article');
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
