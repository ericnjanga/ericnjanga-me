import { Component, Input } from '@angular/core';

type LinkStatus = 'Nav link' | 'button';

@Component({
  selector: 'app-call-to-action-params',
  templateUrl: './call-to-action-params.component.html',
  styleUrls: ['./call-to-action-params.component.scss']
})
export class CallToActionParamsComponent {

  @Input() status: LinkStatus = 'button';
  @Input() link: string = '';
  @Input() label: string = '';
  @Input() qParam: string = '';


  isButton(): boolean {
    return this.status == 'button';
  }
  isNavLink(): boolean {
    return this.status == 'Nav link';
  }

  statusClasses() {
    return {
      'nav-link': this.isNavLink(),
      'button-link': this.isButton()
    }
  }
}

