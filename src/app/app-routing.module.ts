import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonthsComponent } from './months/months.component';
import { DaysComponent } from './days/days.component';

const routes: Routes = [
  { path: 'months', component: MonthsComponent },
  { path: 'days', component: DaysComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
