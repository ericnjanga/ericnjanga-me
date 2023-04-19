import { Component, Input } from '@angular/core';

type LinkStatus = 'Nav link' | 'button';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class CallToActionComponent {

  @Input() status: LinkStatus = 'button';
  @Input() link: string = '';
  @Input() label: string = '';


  isButton(): boolean {
    return this.status == 'button';
  }
  isNavLink(): boolean {
    return this.status == 'Nav link';
  }

  statusClasses() {
    return {
      'nav-link': (this.status == 'Nav link'),
      'button-link': (this.status == 'button')
    }
  }

}
