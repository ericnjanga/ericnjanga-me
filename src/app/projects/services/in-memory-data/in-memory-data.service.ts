import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, RequestInfoUtilities } from 'angular-in-memory-web-api';
import { Observable, of, delay } from 'rxjs';
import { Project } from '../../model/project';
import { PROJECTS_DATABASE } from 'src/app/projects/mocks/project-list';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  projects = PROJECTS_DATABASE;
  
  // Generate an array of random projects
  createDb(reqInfo?: RequestInfo) {

    console.log('createDb().....', reqInfo);

    // return {projects}; // product endpoint
    return { projects: this.projects };
  }




  constructor() { }
}
