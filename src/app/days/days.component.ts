import { Component, OnInit } from '@angular/core';

declare var M: any;
interface QuestionType { origin: string, answer: string }

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.sass']
})
export class DaysComponent implements OnInit {
  private questions: QuestionType[] = [
    { origin: 'Monday', answer: 'Maanantai' },
    { origin: 'Tuesday', answer: 'Tiistai' },
    { origin: 'Wednesday', answer: 'Keskiviikko' },
    { origin: 'Thursday', answer: 'Torstai' },
    { origin: 'Friday', answer: 'Perjantai' },
    { origin: 'Saturday', answer: 'Lauantai' },
    { origin: 'Sunday', answer: 'Sunnuntai' },
    { origin: 'Weekend', answer: 'Viikonloppu' }
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
