import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, shareReplay } from 'rxjs/operators';
import { Project, ProductDetail, ProjectsPayload } from '../model/project';
import { EMPTY_PROJECT, EMPTY_PROJECT_DETAIL } from 'src/app/projects/mocks/project-list';


@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  private baseUrl = 'api/projects';  // URL to web api


  getEmptyProject(): Project {
    return EMPTY_PROJECT;
  }

  getEmptyProjectDetail(): ProductDetail {
    return EMPTY_PROJECT_DETAIL;
  }


  loadAll(stat:string, ind:string, pSize: number = 100): Observable<ProjectsPayload> {

    // Default value for pagination
    const pNumber = 0;

    const url = `/${this.baseUrl}?status=${stat}&industry=${ind}&pageNumber=${pNumber}&pageSize=${pSize}`;
    const headers = { 'Content-Type': 'application/json' }; 

    return this.http.get<ProjectsPayload>(url, { headers })
        .pipe(
            map(res => res),
            shareReplay()
        );
  }


  loadProjectByUrl(projectUrl: string): Observable<Project> {

    //Sample API call: http://localhost:7000/api/projects/28-connecting-the-dots-of-a-social-business

    const url = `/${this.baseUrl}/${projectUrl}`;

    return this.http.get<Project>(url)
    .pipe(
      shareReplay()
    );
  }



  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // [E.NJANGA] - TO DO: Repalce the "log" function by a "message service" that displays messages via a snack bar
      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(private http:HttpClient) { }
}
