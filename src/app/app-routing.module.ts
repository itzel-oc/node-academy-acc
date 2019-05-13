import { NgModule } from '@angular/core';
import { NpmComponent } from './pages/npm/npm.component';
import {RouterModule} from '@angular/router';
import { NpmComponent as NpmExercisesComponent } from './pages/exercises/npm/npm.component';
import {ExpressComponent} from './pages/exercises/express/express.component';

const routes = [
  { path: '', redirectTo: 'npm', pathMatch: 'full' },
  { path: 'npm', component: NpmComponent },
  { path: 'exercises/npm', component: NpmExercisesComponent },
  { path: 'exercises/express', component: ExpressComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
