import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { TotalPipe } from './total.pipe';
import { NoCommentPipe } from './pipes/no-comment.pipe';
import { StateDirective } from './directives/state.directive';

@NgModule({
  declarations: [
    TableLightComponent,
    BtnComponent,
    TotalPipe,
    NoCommentPipe,
    StateDirective
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
    StateDirective
  ]
})
export class SharedModule { }
