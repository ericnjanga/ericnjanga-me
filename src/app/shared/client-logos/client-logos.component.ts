import { Component, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';


@Component({
  selector: 'app-client-logos',
  templateUrl: './client-logos.component.html',
  styleUrls: ['./client-logos.component.scss']
})
export class ClientLogosComponent {
  @Input() title = '';
  @Input() info = '';

  // Will help hide informational icons on touch screens (because material toolip supports only hovers)
  isHoverSupported = true;
  // tooltip positionning ...
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[3]);

  // Don't sign a specific type to the child view 
  // (it will be casted as a "nativeElement" later in the code)
  // scroll system
  @ViewChild('scrollable', { static: true }) scrollable: any; // scrollable area ..
  scrollValue = 0;  // scrol counter ..

  list: number[] = [1,2,3,4,5,6,7,8,9];

  imgClass(index: number) {
    return {
      'company-logo--width1': index === 6,
      'company-logo--width2': index === 9
    }
  }

  /**
   * Make the scrollable area scroll left or right
   * @param direction 
   */
  scroll(direction: number) {
    const container = this.scrollable.nativeElement;
    const step = 200;
    const scrollAmount = container.scrollLeft + (step * direction);
    container.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
    this.scrollValue += step * direction;
  }

  // Assign a value to hover flag base on browser support
  activateHoverFlagSupport() {
    // Enable tooltips on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
      this.isHoverSupported = false;
    }
  }


  ngOnInit() {
    this.activateHoverFlagSupport();
  }
}
