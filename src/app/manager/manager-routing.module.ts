import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddManagerComponent } from './pages/page-add-manager/page-add-manager.component';
import { PageEditManagerComponent } from './pages/page-edit-manager/page-edit-manager.component';
import { PageListManagersComponent } from './pages/page-list-managers/page-list-managers.component';

const routes: Routes = [
  {path: '', component: PageListManagersComponent },
  {path: 'add', component: PageAddManagerComponent},
  {path: 'edit/:id', component: PageEditManagerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
