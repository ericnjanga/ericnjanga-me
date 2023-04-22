import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../model/project';
import { ProjectService } from '../services/project.service';
// import { CATEGORY_DATABASE } from 'src/app/projects/mocks/category-list';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // pageCategory = CATEGORY_DATABASE[0].hash;

  projects$: Observable<Project[]> | undefined;

  ngOnInit(): void {
    // Set page title
    this.titleService.setTitle('Eric Njanga | Latest work');

    // ...
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

  constructor(private titleService: Title, public projectService: ProjectService) {}
}
