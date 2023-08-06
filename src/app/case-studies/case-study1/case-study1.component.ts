import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';
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

  isSticky: boolean = false;
  viewport = {
    w1: 992,
    w2: 1200,
    w3: 1400
  };
  heroHeight = {
    l1: 850,
    l2: 1000,
    l3: 1220
  };

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Get the viewport width
    const viewportWidth = window.innerWidth;


    console.log(' ---- w = ' ,viewportWidth);

    // ...
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Check if the viewport width is greater than or equal to 992px
    if (viewportWidth >= this.viewport.w1 && viewportWidth < this.viewport.w2) {
      // Set scrollPosition to this.heroHeight.l4
      this.isSticky = scrollPosition > this.heroHeight.l1;

    } else if (viewportWidth >= this.viewport.w2 && viewportWidth < this.viewport.w3) {
      this.isSticky = scrollPosition > this.heroHeight.l2;

    } else if (viewportWidth >= this.viewport.w3) {
      this.isSticky = scrollPosition > this.heroHeight.l3;

    } else {
      // For viewport width less than 992px, set isSticky to false
      this.isSticky = false;

    }
  }

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
