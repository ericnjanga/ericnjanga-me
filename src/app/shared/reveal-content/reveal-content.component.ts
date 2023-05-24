import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-reveal-content',
  templateUrl: './reveal-content.component.html',
  styleUrls: ['./reveal-content.component.scss']
})
export class RevealContentComponent {
  showContent = false;

  // If true, collapsible effect will only work
  // when the container is within a precise range
  @Input() containerQuery = false; 
 

  toggleMask() {
    this.showContent = !this.showContent;
  }

  compClass() {
    return {
      'content-masked' : this.showContent == false,
      'is-container-query' : this.containerQuery == true,
    }
  }

}
