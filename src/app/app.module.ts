import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { NpmComponent } from './pages/npm/npm.component';
import {RunkitModule} from './shared/runkit/runkit.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NpmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RunkitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
