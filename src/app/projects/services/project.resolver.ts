import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Project } from "../model/project";
import { ProjectService } from "./project.service";


@Injectable()
export class ProjectResolver implements Resolve<Project> {

    constructor(private projectService: ProjectService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Project> {
        // SAMPLE API URL: http://localhost:4200/projects/name-of-the-project
        const projectUrl = route.paramMap.get('projectUrl') ?? '';

        return this.projectService.loadProjectByUrl(projectUrl);
    }

}