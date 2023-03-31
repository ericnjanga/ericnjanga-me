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




    // const id = reqInfo?.id;

    // if (id) {
    //   const item = this.projects.find(d => d.url === id);
    //   const result = { projects: item }; // item ? { projects: item } : undefined;


    //   console.log('result.....', result);

    //   return of(item).pipe(delay(500));
    // }




    // return {projects}; // product endpoint
    return { projects: this.projects };
  }

 


  // parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
  //   const newUrl = url.replace(/\/foo\/heroes/, '/heroes');
  //   // console.log('newUrl', newUrl);
  //   const parsed = utils.parseRequestUrl(newUrl);
  //   console.log(`parseRequestUrl override of '${url}':`, parsed);
  //   return parsed;
  // }


  // parseRequestUrl(reqInfo: RequestInfo,utils: RequestInfoUtilities): ParsedRequestUrl {
  //   // If the request is a GET request with a "url" query parameter,
  //   // use the "url" property to filter the data.
  //   if (reqInfo.method === 'GET' && reqInfo.query.has('url')) {
  //     const url = reqInfo.query.get('url');
  //     return {
  //       collectionName: 'projects',
  //       id: null,
  //       query: (item: Project) => item.url === url,
  //     };
  //   }
  //   // Otherwise, use the default behavior.
  //   return utils.parseRequestUrl(reqInfo);
  // }




  constructor() { }
}
