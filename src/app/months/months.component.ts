import { Component, OnInit } from '@angular/core';

declare var M: any;

interface QuestionType { origin: string, answer: string }
@Component({
  selector: 'app-months',
  templateUrl: './months.component.html',
  styleUrls: ['./months.component.sass']
})
export class MonthsComponent implements OnInit {
  private questions: QuestionType[] = [
    { origin: 'January', answer: 'Tammikuu' },
    { origin: 'February', answer: 'Helmikuu' },
    { origin: 'March', answer: 'Maaliskuu' },
    { origin: 'April', answer: 'Huhtikuu' },
    { origin: 'May', answer: 'Toukokuu' },
    { origin: 'June', answer: 'Kesäkuu' },
    { origin: 'July', answer: 'Heinäkuu' },
    { origin: 'August', answer: 'Elokuu' },
    { origin: 'September', answer: 'Syyskuu' },
    { origin: 'October', answer: 'Lokakuu' },
    { origin: 'November', answer: 'Marraskuu' },
    { origin: 'December', answer: 'Joulukuu' },
  ];
  public question = null;
  public show = false;
  public answer = '';

  constructor() {}

  ngOnInit() {
    this.selectQuestion();
  }

  selectQuestion() {
    let q = null;
    do {
      q = this.questions[Math.floor(Math.random() * 10) % this.questions.length];
    } while (q === this.question);
    this.question = q;
    this.show = false;
    this.answer = '';
  }

  checkAnswer() {
    console.log(this.answer, this.question.answer);
    if (this.answer.toLowerCase() === this.question.answer.toLowerCase()) {
      M.toast({html: 'Good answer', classes: 'green'});
      this.selectQuestion();
    } else {
      M.toast({html: 'Wrong answer', classes: 'red'});
    }
  }

  reverse() {
    const qs = this.questions.map((question) => ({ origin: question.answer, answer: question.origin }));
    this.questions = qs;
  }
}
