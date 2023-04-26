import { Component } from '@angular/core';
import { ProjectService } from './../../projects/services/project.service';

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
    this.projectService.loadAll('published', 'ux-design').subscribe((obj) => {
      this.uxdCount = obj.total;
    });
    this.projectService.loadAll('published', 'ui-development').subscribe((obj) => {
      this.uidCount = obj.total;
    });
  }

  statusClass() {
    return this.activeClass;
  }

  constructor(public projectService: ProjectService) {}
}
