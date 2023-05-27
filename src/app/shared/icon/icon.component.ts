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
  isInfoFill: boolean = false;
  isInfoLg: boolean = false;
  isInfoCircle = false;
  isArrowLeft: boolean = false;
  isArrowRight: boolean = false;
  isCTAarrow: boolean = false;
  isLogoTop = false;
  isLogoBottom = false;
  isfileearmark: boolean = false;
  iswindow: boolean = false;
  isfileearmarkpdf: boolean = false;
  isfileslides: boolean = false;
  isfileearmarkrichtext: boolean = false;
  isfileplayfill: boolean = false;
  isFlaticonSuitcase = false;

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

      case "info fill":
        this.isInfoFill = true;
        break;

      case "info lg":
        this.isInfoLg = true;
        break;

      case "info circle":
        this.isInfoCircle = true;
        break;

      case "arrowLeft":
        this.isArrowLeft = true;
        break;

      case "arrowRight":
        this.isArrowRight = true;
        break;

      case "ctaArrow":
        this.isCTAarrow = true;
        break;

      case "logo top":
        this.isLogoTop = true;
        break;

      case "logo bottom":
        this.isLogoBottom = true;
        break;

      case "fileearmark":
        this.isfileearmark = true;
        break;

      case "window":
        this.iswindow = true;
        break;

      case "fileearmarkpdf":
        this.isfileearmarkpdf = true;
        break;

      case "fileslides":
        this.isfileslides = true;
        break;

      case "fileearmarkrichtext":
        this.isfileearmarkrichtext = true;
        break;

      case "fileplayfill":
        this.isfileplayfill = true;
        break;

      case "flaticon suitcase":
        this.isFlaticonSuitcase = true;
        break;
    }
  }
}



