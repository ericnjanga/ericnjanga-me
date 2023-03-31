import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Project } from '../../model/project';
import { PROJECTS_DATABASE } from 'src/app/projects/mocks/project-list';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  projects = PROJECTS_DATABASE;
  
  // Generate an array of random projects
  createDb() {
    // let projects = PROJECTS_DATABASE;

    console.log('.....');

    // return {projects}; // product endpoint
    return { projects: this.projects };
  }

/*
  get(reqInfo: any) {
    const projects = this.createDb().projects;
    const collectionName = reqInfo.collectionName;

    if (collectionName === 'projects') {
      const id = reqInfo.id;

      if (id) {
        const item = projects.find(x => x.url === id);
        return item ? { body: item } : { status: 404 };
      } else {
        return { data: this.data };
        // const query = reqInfo.query;
        // let items = projects;

        // if (query) {
        //   console.log('.....', query);

        //   items = projects.filter(x => {
        //     for (const key in query) {
        //       if (query.hasOwnProperty(key) && x[key] !== query[key]) {
        //         return false;
        //       }
        //     }
        //     return true;
        //   });
        // }

        // return { body: items };
      }

    }


    console.log('...', reqInfo);

    return undefined;
  }
  */
  
  /*

  get(reqInfo: any) {

    const id = reqInfo.id; // parseInt(reqInfo.id, 10);


    console.log('.....', reqInfo);


    if (id) {
      const item = this.projects.find(d => d.url === id);
      return item ? { projects: item } : undefined;
    } else {


    console.log('...00', this.projects);


      return { projects: this.projects };
    }



    // const projects = this.createDb().projects;
    // const collectionName = reqInfo.collectionName;

    // if (collectionName === 'projects') {
    //   const id = reqInfo.id;

    //   if (id) {
    //     const item = projects.find(x => x.url === id);
    //     return item ? { body: item } : { status: 404 };
    //   } else {
    //     return { data: this.data };
    //     // const query = reqInfo.query;
    //     // let items = projects;

    //     // if (query) {
    //     //   console.log('.....', query);

    //     //   items = projects.filter(x => {
    //     //     for (const key in query) {
    //     //       if (query.hasOwnProperty(key) && x[key] !== query[key]) {
    //     //         return false;
    //     //       }
    //     //     }
    //     //     return true;
    //     //   });
    //     // }

    //     // return { body: items };
    //   }

    // }
  }
  
  */

  constructor() { }
}
