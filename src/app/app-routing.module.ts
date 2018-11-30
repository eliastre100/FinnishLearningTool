import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonthsComponent } from './months/months.component';
import { DaysComponent } from './days/days.component';
import { IndexComponent } from './index/index.component';
import { DoingComponent } from './doing/doing.component';
import { HeadComponent } from './head/head.component';
import { MaritalStatusComponent } from './marital-status/marital-status.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { PersonsComponent } from './persons/persons.component';
import {QuestionsComponent} from './questions/questions.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'months', component: MonthsComponent },
  { path: 'days', component: DaysComponent },
  { path: 'doing', component: DoingComponent },
  { path: 'head', component: HeadComponent },
  { path: 'marital-status', component: MaritalStatusComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'persons', component: PersonsComponent },
  { path: 'questions', component: QuestionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
