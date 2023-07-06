import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-case-study1',
  templateUrl: './case-study1.component.html',
  styleUrls: ['./case-study1.component.scss']
})
export class CaseStudy1Component {

  constructor(private elementRef: ElementRef) {}

  scrollToSection(sectionId: string) {
    const section = this.elementRef.nativeElement.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnInit() {
    // Set the scroll position to 0,0 when the component is initialized. 
    window.scrollTo(0, 0);

    // Set page title
    // this.titleService.setTitle('Eric Njanga | About');
  }
}
