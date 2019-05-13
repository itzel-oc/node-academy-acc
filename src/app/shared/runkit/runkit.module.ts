import {Component, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunkitComponent } from './runkit.component';
import { RunKitEmbedComponent } from 'angular-runkit';

@NgModule({
  declarations: [
    RunkitComponent,
    RunKitEmbedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RunkitComponent
  ]
})
export class RunkitModule { }
