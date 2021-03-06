import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonthsComponent } from './months/months.component';
import { FormsModule } from '@angular/forms';
import { DaysComponent } from './days/days.component';
import { IndexComponent } from './index/index.component';
import { DoingComponent } from './doing/doing.component';
import { HeadComponent } from './head/head.component';
import { MaritalStatusComponent } from './marital-status/marital-status.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { PersonsComponent } from './persons/persons.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuizzComponent } from './quizz/quizz.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {GhpInterceptor} from './ghpInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    MonthsComponent,
    DaysComponent,
    IndexComponent,
    DoingComponent,
    HeadComponent,
    MaritalStatusComponent,
    HobbiesComponent,
    PersonsComponent,
    QuestionsComponent,
    QuizzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: GhpInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
