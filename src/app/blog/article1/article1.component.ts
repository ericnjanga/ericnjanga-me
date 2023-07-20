import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-article1',
  templateUrl: './article1.component.html',
  styleUrls: ['./article1.component.scss']
})
export class Article1Component {
  constructor(private elementRef: ElementRef) {}

  // This should be in a service
  scrollToSection(): void {
    const section = this.elementRef.nativeElement.querySelector('#section-article');
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
