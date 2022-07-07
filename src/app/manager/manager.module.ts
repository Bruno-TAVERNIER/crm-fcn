import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerRoutingModule } from './manager-routing.module';
import { FormManagerComponent } from './components/form-manager/form-manager.component';
import { PageAddManagerComponent } from './pages/page-add-manager/page-add-manager.component';
import { PageEditManagerComponent } from './pages/page-edit-manager/page-edit-manager.component';
import { PageListManagersComponent } from './pages/page-list-managers/page-list-managers.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FormManagerComponent,
    PageAddManagerComponent,
    PageEditManagerComponent,
    PageListManagersComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    SharedModule
  ]
})
export class ManagerModule { }
