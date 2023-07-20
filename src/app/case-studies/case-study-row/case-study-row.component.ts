import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-case-study-row',
  templateUrl: './case-study-row.component.html',
  styleUrls: ['./case-study-row.component.scss']
})
export class CaseStudyRowComponent {
  @Input() bgAccent = false;

  setbackground() {
    return this.bgAccent ? 'bg-light-accent' : '';
  }
}
