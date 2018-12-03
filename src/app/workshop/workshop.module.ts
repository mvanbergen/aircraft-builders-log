import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BuilderComponent} from './builder/builder.component';
import { ProjectComponent } from './project/project.component';
import { WorklogComponent } from './worklog/worklog.component';
import { PhotoComponent } from './photo/photo.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    BuilderComponent,
    ProjectComponent,
    WorklogComponent,
    PhotoComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PhotoComponent,
    BuilderComponent,
    WorklogComponent,
    ProjectComponent
  ]
})
export class WorkshopModule { }
