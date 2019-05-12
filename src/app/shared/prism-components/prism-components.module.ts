import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandLineComponent } from './command-line/command-line.component';
import { LineNumberDirective } from './line-number.directive';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    CommandLineComponent,
    LineNumberDirective
  ],
  imports: [
    CommonModule,
    MarkdownModule.forChild()
  ],
  exports: [
    CommandLineComponent
  ]
})
export class PrismComponentsModule { }
