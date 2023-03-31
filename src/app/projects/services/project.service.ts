import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Project } from '../../interfaces/project';
import { Observable, of } from 'rxjs';
import { EMPTY_PROJECT } from 'src/app/mocks/project-list';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private ProjectsUrl = 'api/projects';  // URL to web api


  getEmptyProject(): Project {
    return EMPTY_PROJECT;
  }


  generateProjectDatabase(): Observable<Project[]> {
    return this.http.get<Project[]>(this.ProjectsUrl)
      .pipe(
        // [E.NJANGA] - TO DO: Repalce the "log" function by a "message service" that displays messages via a snack bar
        // tap(_ => this.log('fetched Projects')),
        catchError(this.handleError<Project[]>('generateProjectDatabase', []))
      );
  }


  findMatchByCategory(objects: Project[], criteria: { hash?: string; }): Project[] {
    return objects.filter(obj => {
      if (criteria.hash && obj.category.hash !== criteria.hash) {
        return false;
      }
      return true;
    });
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
