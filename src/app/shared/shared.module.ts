import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//pour utiliser les formulaires dans les différents components
import { ReactiveFormsModule } from '@angular/forms';
import { TableLightComponent } from './components/table-light/table-light.component';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { TotalPipe } from './total.pipe';
import { NoCommentPipe } from './pipes/no-comment.pipe';
import { StateDirective } from './directives/state.directive';
import { TableDarkComponent } from './components/table-dark/table-dark.component';


@NgModule({
  declarations: [
    TableLightComponent,
    BtnComponent,
    TotalPipe,
    NoCommentPipe,
    StateDirective,
    TableDarkComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    TableLightComponent,
    BtnComponent,
    IconsModule,
    TemplatesModule,
    TotalPipe,
    NoCommentPipe,
    StateDirective,
    TableDarkComponent,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
