import { AfterViewInit, Component, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import 'lightbox2';

declare var lightbox: any;

@Component({
  selector: 'app-case-study1',
  templateUrl: './case-study1.component.html',
  styleUrls: ['./case-study1.component.scss']
})
export class CaseStudy1Component implements AfterViewInit {

  constructor(private elementRef: ElementRef) {}

  // This should be in a service
  // scrollToSection(): void {
  //   const section = this.elementRef.nativeElement.querySelector('#section-article');
  //   section.scrollIntoView({ behavior: 'smooth' });
  // }



  scrollToSection(sectionId: string) {
    const section = this.elementRef.nativeElement.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }


  ngAfterViewInit(): void {
    // https://lokeshdhakar.com/projects/lightbox2/#options
    lightbox.option({
      // disableScrolling: true,
      fitImagesInViewport: false,
      maxWidth: 600,
      wrapAround: true
      // Lightbox2 configuration options
    });
  }

  ngOnInit() {
    // Set the scroll position to 0,0 when the component is initialized. 
    window.scrollTo(0, 0);


  console.log('-------', $('h1'));

    // Set page title
    // this.titleService.setTitle('Eric Njanga | About');
  }
}
