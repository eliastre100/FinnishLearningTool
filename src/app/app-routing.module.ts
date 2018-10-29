import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MonthsComponent} from './months/months.component';

const routes: Routes = [
  { path: 'months', component: MonthsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
