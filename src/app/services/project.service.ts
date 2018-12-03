import { Injectable } from '@angular/core';
import {ProjectComponent} from '../workshop/project/project.component';
import {BuilderComponent} from '../workshop/builder/builder.component';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private project: ProjectComponent;
  private projects: ProjectComponent[] = [];
  private builder: BuilderComponent;

  constructor() {
  }

  getProject() {
    return this.project;

  }

  getProjects() {

    return this.projects;

  }

  getBuilder() {
    return this.builder;
  }

}
