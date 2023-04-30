import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input() size: string = '';
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() page: string = '';
  @Input() titleCaption: string = '';


  parentClassSetup() {
    return `carousel--${this.size}`;
    // return {
    //   'carousel--small': this.size === 'small',
    //   'carousel--large': this.size === 'large',
    // };
  }

  slideClassSetup() {
    return `slide--${this.page}`;
  }
}






// imgClass(index: number) {
//   return {
//     'width1': index === 6,
//     'width2': index === 9
//   }
// }
