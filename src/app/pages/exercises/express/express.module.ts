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
import { ApiE2Component } from './api-e2/api-e2.component';
import { ApiE3Component } from './api-e3/api-e3.component';
import { ApiE4Component } from './api-e4/api-e4.component';
import { ApiE5Component } from './api-e5/api-e5.component';
import { ApiE6Component } from './api-e6/api-e6.component';

@NgModule({
  declarations: [
    ExpressComponent,
    Exercise1Component,
    TestComponent,
    ApiE1Component,
    ApiE2Component,
    ApiE3Component,
    ApiE4Component,
    ApiE5Component,
    ApiE6Component
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
