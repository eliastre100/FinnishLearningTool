import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonthsComponent } from './months/months.component';
import { DaysComponent } from './days/days.component';
import { IndexComponent } from './index/index.component';
import { DoingComponent } from './doing/doing.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'months', component: MonthsComponent },
  { path: 'days', component: DaysComponent },
  { path: 'doing', component: DoingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
