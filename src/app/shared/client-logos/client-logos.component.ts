import { Component } from '@angular/core';

@Component({
  selector: 'app-client-logos',
  templateUrl: './client-logos.component.html',
  styleUrls: ['./client-logos.component.scss']
})
export class ClientLogosComponent {
  list: number[] = [1,2,3,4,5,6,7,8,9];

  imgClass(index: number) {
    return {
      'company-logo--width1': index === 6,
      'company-logo--width2': index === 9
    }
  }
}
