import { Component } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from '../services/project.service';
import { CATEGORY_DATABASE } from 'src/app/mocks/category-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  data: Project[] = [];
  pageCategory = CATEGORY_DATABASE[0].hash;

  ngOnInit(): void {
    /**
     * Return all project of this category
     */
    this.projectService.generateProjectDatabase().subscribe(
      projects => {
        let tempData = projects;
        this.data = this.projectService.findMatchByCategory(tempData, { hash: this.pageCategory });
      }
    );
  }

  constructor(public projectService: ProjectService) {}
}
