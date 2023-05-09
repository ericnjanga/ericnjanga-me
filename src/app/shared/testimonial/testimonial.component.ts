import { Component, Input } from '@angular/core';
import { Testimonial } from 'src/app/projects/model/testimonial';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {
  @Input() testimonial: Testimonial = { name:'', title: '', text:'', img:'', linkedIn: '', };
}
