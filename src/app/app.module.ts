import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { NpmComponent } from './pages/npm/npm.component';
import {RunkitModule} from './shared/runkit/runkit.module';
import {PrismComponentsModule} from './shared/prism-components/prism-components.module';
import {MarkdownModule, MarkedOptions, MarkedRenderer} from 'ngx-markdown';
import {NpmModule} from './pages/exercises/npm/npm.module';
import {ExpressModule} from './pages/exercises/express/express.module';

export function markedOptions(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.blockquote = (text: string) => {
    return '<blockquote class="blockquote"><p>' + text + '</p></blockquote>';
  };

  return {
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
  };
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NpmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RunkitModule,
    PrismComponentsModule,
    NpmModule,
    ExpressModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptions,
      },
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
