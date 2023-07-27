import { AfterViewInit, Component, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import 'lightbox2';
import { Title } from '@angular/platform-browser';

declare var lightbox: any;

@Component({
  selector: 'app-case-study1',
  templateUrl: './case-study1.component.html',
  styleUrls: ['./case-study1.component.scss']
})
export class CaseStudy1Component implements AfterViewInit {

  constructor(private titleService: Title, private elementRef: ElementRef) {}

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

    // Set page title
    this.titleService.setTitle('Eric Njanga | Case study | Transformation and realignment of a website with corporate strategy');
  }
}
