import { Component, Input } from '@angular/core';
import { Testimonial } from 'src/app/projects/model/testimonial';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {
  @Input() quote: Testimonial | undefined;
}
