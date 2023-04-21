import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.svg',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() name: string = '';

  // Inserted in the UI library
  isGitHub: boolean = false;
  isLinkedIn: boolean = false;
  isIXDF: boolean = false;
  isInfo: boolean = false;
  isArrowRight: boolean = false;
  isCTAarrow: boolean = false;
  isLogo: boolean = false;

  ngOnInit() {
    /** Will display help icon if no value is received */
    switch (this.name) {

      case "github":
        this.isGitHub = true;
        break;

      case "linkedin":
        this.isLinkedIn = true;
        break;

      case "ixdf":
        this.isIXDF = true;
        break;

      case "info":
        this.isInfo = true;
        break;

      case "arrowRight":
        this.isArrowRight = true;
        break;

      case "ctaArrow":
        this.isCTAarrow = true;
        break;

      case "logo":
        this.isLogo = true;
        break;
    }
  }
}