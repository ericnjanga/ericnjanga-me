import { Component } from '@angular/core';

@Component({
  selector: 'app-two-skills',
  templateUrl: './two-skills.component.html',
  styleUrls: ['./two-skills.component.scss']
})
export class TwoSkillsComponent {

  activeClass: string = '';

  onMouseEnter() {
    this.activeClass = 'moveIn';
  }
  
  onMouseLeave() {
    this.activeClass = 'moveOut';
  }

  statusClass() {
    return this.activeClass;
  }
}
