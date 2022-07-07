import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddProjectComponent } from './pages/page-add-project/page-add-project.component';
import { PageEditProjectComponent } from './pages/page-edit-project/page-edit-project.component';
import { PageListProjectsComponent } from './pages/page-list-projects/page-list-projects.component';

const routes: Routes = [
  {path: '', component: PageListProjectsComponent},
  {path: 'add', component: PageAddProjectComponent},
  {path: 'edit/:id', component: PageEditProjectComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
