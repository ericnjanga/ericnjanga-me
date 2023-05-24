import { Component, Input } from '@angular/core';
import { Testimonial } from 'src/app/projects/model/testimonial';
import { stripHtmlTags } from './../../shared/utils';
import { slideUpDown, openCLose } from '../animation.slideUpDown';


@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
  animations: [
    openCLose,
    slideUpDown
  ]
})
export class TestimonialComponent {
  @Input() testimonial: Testimonial = { name:'', title: '', text:'', img:'', linkedIn: '', };
  trimmedText: string = '';
  fullText: string = '';
  showFullText = false;

  // ngOnInit() {
  //   const htmlFreeText = stripHtmlTags(this.testimonial.text);
  //   this.trimmedText = htmlFreeText.substring(0, 135);
  //   this.fullText = this.testimonial.text;
  // }

  // toggleText() {
  //   this.showFullText = !this.showFullText;
  // }

  // arrowDirection(dir: boolean) {
  //   return `button-secondary--${dir ? 'up' : 'down'}`;
  // }
}
