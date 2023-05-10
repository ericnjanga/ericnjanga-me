import { Component, Input} from '@angular/core';
import { Testimonial } from 'src/app/projects/model/testimonial';

@Component({
  selector: 'app-nice-poster',
  templateUrl: './nice-poster.component.html',
  styleUrls: ['./nice-poster.component.scss']
})
export class NicePosterComponent {
  @Input() elt: Testimonial | undefined;
  @Input() decType: string = '1';
}
