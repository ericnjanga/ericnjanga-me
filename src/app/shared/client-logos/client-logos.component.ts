import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-client-logos',
  templateUrl: './client-logos.component.html',
  styleUrls: ['./client-logos.component.scss']
})
export class ClientLogosComponent {
  // Don't sign a specific type to the child view 
  // (it will be casted as a "nativeElement" later in the code)
  @ViewChild('scrollable', { static: true }) scrollable: any;

  list: number[] = [1,2,3,4,5,6,7,8,9];
  scrollValue = 0;

  imgClass(index: number) {
    return {
      'company-logo--width1': index === 6,
      'company-logo--width2': index === 9
    }
  }

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
}
