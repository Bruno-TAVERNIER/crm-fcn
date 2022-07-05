import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';

@NgModule({
  declarations: [
    TableLightComponent,
    BtnComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    TableLightComponent,
    BtnComponent,
    IconsModule,
    TemplatesModule
  ]
})
export class SharedModule { }
