import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {WorklogComponent} from '../worklog/worklog.component';
import {BuilderComponent} from '../builder/builder.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  private workLogs: WorklogComponent[] = [];
  private builder: BuilderComponent;
  private name: string;
  private description: string;
  private kitName: string;
  private dateCreated: Date;

  constructor(private projectService: ProjectService, private projectId: number) { }

  getBuilder() {
    return this.builder;
  }
  getName() {
    return this.name;
  }
  getDescription() {
    return this. description;
  }
  getKitName() {
    return this.kitName;
  }
  getDateCreated() {
    return this.dateCreated;
  }
  getWorklogs() {
    return this.workLogs;
  }

  ngOnInit() {
  }

}
