import { Component, Input } from '@angular/core';

type LogoStatus = 'vertical' | 'horizontal';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Input() direction: LogoStatus = 'vertical';


  isVertical(): boolean {
    return this.direction == 'vertical';
  }
  isHorizontal(): boolean {
    return this.direction == 'horizontal';
  }

  directionClasses() {
    return {
      'logo--vertical': this.isVertical(),
      'logo--horizontal': this.isHorizontal()
    }
  }
}
