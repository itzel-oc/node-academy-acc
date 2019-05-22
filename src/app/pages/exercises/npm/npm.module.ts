import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise1Component } from './exercise1/exercise1.component';
import { NpmComponent } from './npm.component';
import {PrismComponentsModule} from '../../../shared/prism-components/prism-components.module';
import {MarkdownModule} from 'ngx-markdown';
import {RunkitModule} from '../../../shared/runkit/runkit.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material';
import { TestsComponent } from './tests/tests.component';
import { Exercise2Component } from './exercise2/exercise2.component';
import { Exercise3Component } from './exercise3/exercise3.component';

@NgModule({
  declarations: [
    Exercise1Component,
    Exercise2Component,
    Exercise3Component,
    NpmComponent,
    TestsComponent,
  ],
  imports: [
    CommonModule,
    PrismComponentsModule,
    MarkdownModule.forChild(),
    RunkitModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  exports: [
    NpmComponent
  ]
})
export class NpmModule { }
