import { Component } from '@angular/core';
// import { ProjectService } from 'src/app/services/project/project.service';
import { CATEGORY_DATABASE } from 'src/app/projects/mocks/category-list';

@Component({
  selector: 'app-uidevelopment',
  templateUrl: './uidevelopment.component.html',
  styleUrls: ['./uidevelopment.component.scss']
})
export class UidevelopmentComponent {
  // data: Project[];
  pageCategory = CATEGORY_DATABASE[0].hash;

  ngOnInit(): void {
    /**
     * Return all project of this category
     */
    // this.projectService.generateDatabase().subscribe(
    //   projects => {
    //     let tempData = projects;
    //     this.data = this.projectService.findMatchByCategory(tempData, { hash: this.pageCategory });
    //   }
    // );
  }

  // constructor(public projectService: ProjectService) {
  //   this.data = [];
  // }
}
