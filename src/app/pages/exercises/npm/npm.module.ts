import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise1Component } from './exercise1/exercise1.component';
import { NpmComponent } from './npm.component';
import {PrismComponentsModule} from '../../../shared/prism-components/prism-components.module';
import {MarkdownModule} from 'ngx-markdown';
import {RunkitModule} from '../../../shared/runkit/runkit.module';

@NgModule({
  declarations: [
    Exercise1Component,
    NpmComponent,
  ],
  imports: [
    CommonModule,
    PrismComponentsModule,
    MarkdownModule.forChild(),
    RunkitModule
  ],
  exports: [
    NpmComponent
  ]
})
export class NpmModule { }
