import { Component } from '@angular/core';

@Component({
  selector: 'app-top-clients-list',
  templateUrl: './top-clients-list.component.html',
  styleUrls: ['./top-clients-list.component.scss']
})
export class TopClientsListComponent {
  list: number[] = [1,2,3,4,5,6,7,8,9];

  imgClass(index: number) {
    return {
      'width1': index === 6,
      'width2': index === 9
    }
  }
}
