import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, shareReplay } from 'rxjs/operators';
import { Project } from '../model/project';
import { EMPTY_PROJECT } from 'src/app/projects/mocks/project-list';

@Injectable({
  providedIn: 'root'
})
// @Injectable()
export class ProjectService {
  private ProjectsUrl = 'api/projects';  // URL to web api


  getEmptyProject(): Project {
    return EMPTY_PROJECT;
  }




  loadAll(): Observable<Project[]> {

    const url = '/api/projects?pageNumber=0&pageSize=3';
    const headers = { 'Content-Type': 'application/json' }; 

    return this.http.get<Project[]>(url, { headers })
        .pipe(
            map(res => res),
            shareReplay()
        );
}


  generateDatabase(): Observable<Project[]> {

    console.log(' gen DB');

    return this.http.get<Project[]>(this.ProjectsUrl)
      .pipe(
        // [E.NJANGA] - TO DO: Repalce the "log" function by a "message service" that displays messages via a snack bar
        // tap(_ => this.log('fetched Projects')),
        catchError(this.handleError<Project[]>('generateDatabase', []))
      )
  }


  loadProjectByUrl(projectUrl: string): Observable<Project> {

    //Sample API call: http://localhost:7000/api/projects/28-connecting-the-dots-of-a-social-business

    const url = `/api/projects/${projectUrl}`;

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
