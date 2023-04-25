import { Component } from '@angular/core';
import { ProjectService } from './../../projects/services/project.service';
import { Observable } from 'rxjs';
import { CountPayload } from './../../projects/model/project';

@Component({
  selector: 'app-two-skills',
  templateUrl: './two-skills.component.html',
  styleUrls: ['./two-skills.component.scss']
})
export class TwoSkillsComponent {

  activeClass: String = '';
  uxdCount: number | undefined;
  uidCount: number | undefined;

  ngOnInit() {
    this.loadCounters();
  }

  onMouseEnter() {
    this.activeClass = 'moveIn';
  }
  
  onMouseLeave() {
    this.activeClass = 'moveOut';
  }

  loadCounters() {
    this.projectService.getCount('uxd').subscribe((obj) => {
      this.uxdCount = obj?.projectCount;
      // console.log(obj?.projectCount);
    });
    this.projectService.getCount('uid').subscribe((obj) => {
      this.uidCount = obj?.projectCount;
      // console.log(obj?.projectCount);
    });
    // this.uxdTest$ = this.projectService.getCount('uxd');
    // this.uidCount$ = this.projectService.getCount('uid');
  }

  statusClass() {
    return this.activeClass;
  }

  constructor(public projectService: ProjectService) {}
}
