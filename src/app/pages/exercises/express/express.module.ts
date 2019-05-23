import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrismComponentsModule} from '../../../shared/prism-components/prism-components.module';
import {MarkdownModule} from 'ngx-markdown';
import {RunkitModule} from '../../../shared/runkit/runkit.module';
import {ExpressComponent} from './express.component';
import {Exercise1Component} from './exercise1/exercise1.component';
import {MatExpansionModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { ApiE1Component } from './api-e1/api-e1.component';

@NgModule({
  declarations: [
    ExpressComponent,
    Exercise1Component,
    TestComponent,
    ApiE1Component
  ],
  imports: [
    CommonModule,
    PrismComponentsModule,
    MarkdownModule.forChild(),
    RunkitModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ]
})
export class ExpressModule { }
