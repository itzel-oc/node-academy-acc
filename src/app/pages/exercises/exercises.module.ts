import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpmComponent } from './npm/npm.component';
import { Exercise1Component } from './npm/exercise1/exercise1.component';
import {PrismComponentsModule} from '../../shared/prism-components/prism-components.module';
import {MarkdownModule} from 'ngx-markdown';
import {RunkitModule} from '../../shared/runkit/runkit.module';

@NgModule({
  declarations: [
    NpmComponent,
    Exercise1Component],
  imports: [
    CommonModule,
    PrismComponentsModule,
    MarkdownModule.forChild(),
    RunkitModule
  ]
})
export class ExercisesModule { }
