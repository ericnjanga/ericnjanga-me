import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Project } from "../model/project";
import { ProjectService } from "./project.service";


@Injectable()
export class ProjectResolver implements Resolve<Project> {

    constructor(private projectService: ProjectService) {
        
    }

    // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Project | Observable<Project> | Promise<Project> {
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Project> {
        
    }

}