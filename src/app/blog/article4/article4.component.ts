import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-article4',
  templateUrl: './article4.component.html',
  styleUrls: ['./article4.component.scss']
})
export class Article4Component {
  constructor(private elementRef: ElementRef) {}

  // This should be in a service
  scrollToSection(): void {
    const section = this.elementRef.nativeElement.querySelector('#section-article');
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
