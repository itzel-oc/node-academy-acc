import { NgModule } from '@angular/core';
import { NpmComponent } from './pages/npm/npm.component';
import {RouterModule} from '@angular/router';

const routes = [
  { path: '', redirectTo: 'npm', pathMatch: 'full' },
  { path: 'npm', component: NpmComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
