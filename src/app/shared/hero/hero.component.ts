import { Component, Input } from '@angular/core';
import { Category } from 'src/app/projects/model/category';
import { Testimonial } from 'src/app/projects/model/testimonial';
// import projectdeta

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input() size: string = '';
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() imageType: string = '';
  @Input() page: string = '';
  @Input() titleCaption: string = '';
  @Input() captionData: Category[] = [];
  @Input() quote: Testimonial | undefined;


  parentClassSetup() {
    return `hero--${this.size} hero--${this.page}`;
    // return {
    //   'hero--small': this.size === 'small',
    //   'hero--large': this.size === 'large',
    // };
  }

  // slideClassSetup() {
  //   return `slide--${this.page}`;
  // }

  imgClass(type: string) {
    return `img--${type}`;
  }

  quoteClass() {
    return this.quote ? 'isQuote' : '';
  }
}





// imgClass(index: number) {
//   return {
//     'width1': index === 6,
//     'width2': index === 9
//   }
// }
