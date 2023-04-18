import { Component } from '@angular/core';
import { Project } from '../model/project';
import { ProjectService } from '../services/project.service';
import { CATEGORY_DATABASE } from 'src/app/projects/mocks/category-list';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  data: Project[] = [];
  pageCategory = CATEGORY_DATABASE[0].hash;

  projects$: Observable<Project[]> | undefined;

  ngOnInit(): void {

    this.reloadProjects();


    // /**
    //  * Return all project of this category
    //  */
    // this.projectService.generateDatabase().subscribe(
    //   projects => {
    //     // let tempData = projects.splice(-10); //.slice(196);

    //     this.data = projects;

    //     // console.log('.....==>>>', tempData);
    //     // // Get only elements of this category ...
    //     // this.data = this.projectService.findMatchByCategory(tempData, { hash: this.pageCategory });
    //   }
    // );
  }


  reloadProjects() {
    this.projects$ = this.projectService.loadAll();
  }

  constructor(public projectService: ProjectService) {}
}
