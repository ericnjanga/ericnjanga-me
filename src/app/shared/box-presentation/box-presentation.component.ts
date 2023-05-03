import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-presentation',
  templateUrl: './box-presentation.component.html',
  styleUrls: ['./box-presentation.component.scss']
})
export class BoxPresentationComponent {

  @Input() bg: string = '';
  @Input() imgSrc: string = '';
  @Input() buttonLabel: string = '';
  @Input() buttonLink: string = '';
  @Input() category: string = '';

  activeClass: string = '';

  onMouseEnter() {
    this.activeClass = 'moveIn';
  }
  
  onMouseLeave() {
    this.activeClass = 'moveOut';
  }

  statusClass() {
    return this.activeClass;
  }
}
