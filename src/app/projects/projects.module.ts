import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { FormProjectComponent } from './components/form-project/form-project.component';
import { PageListProjectsComponent } from './pages/page-list-projects/page-list-projects.component';
import { PageAddProjectComponent } from './pages/page-add-project/page-add-project.component';
import { PageEditProjectComponent } from './pages/page-edit-project/page-edit-project.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FormProjectComponent,
    PageListProjectsComponent,
    PageAddProjectComponent,
    PageEditProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ]
})
export class ProjectsModule { }
