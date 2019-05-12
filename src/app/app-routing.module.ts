import { NgModule } from '@angular/core';
import { NpmComponent } from './pages/npm/npm.component';
import {RouterModule} from '@angular/router';
import { NpmComponent as NpmExercisesComponent } from './pages/exercises/npm/npm.component';

const routes = [
  { path: '', redirectTo: 'npm', pathMatch: 'full' },
  { path: 'npm', component: NpmComponent },
  { path: 'exercises/npm', component: NpmExercisesComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
