import { Component, OnInit } from '@angular/core';

declare var M: any;
interface QuestionType { origin: string; answer: string; enabled: boolean; }


@Component({
  selector: 'app-marital-status',
  templateUrl: './marital-status.component.html',
  styleUrls: ['./marital-status.component.sass']
})
export class MaritalStatusComponent implements OnInit {
  private questions: QuestionType[] = [
    { origin: 'Boyfriend',          answer: 'Poikaystävä',          enabled: true },
    { origin: 'Girlfriend',         answer: 'Tyttöystävä',          enabled: true },
    { origin: 'Single',             answer: 'Sinkku',               enabled: true },
    { origin: 'Engaged',            answer: 'Kihloissa',            enabled: true },
    { origin: 'Married',            answer: 'Naimisissa',           enabled: true },
    { origin: 'Divorced',           answer: 'Eronnut',              enabled: true }
  ];
  public question = null;
  public course = false;
  public answerneeded = 1;
  public show = false;
  public answer = '';

  constructor() {}

  ngOnInit() {
    this.selectQuestion();
  }

  selectQuestion() {
    let q = null;
    const enabledQuestions = this.questions.filter((element) => element.enabled);
    if (enabledQuestions.length < 1) {
      alert('No question enabled. Please enable more question to use the quizz feature');
      return;
    }
    do {
      q = enabledQuestions[Math.floor(Math.random() * 10) % enabledQuestions.length];
    } while (q === this.question && enabledQuestions.length > 1);
    this.question = q;
    this.answerneeded = 1;
    this.resetInputs();
  }

  checkAnswer() {
    if (this.answer.toLowerCase() === this.question.answer.toLowerCase()) {
      M.toast({html: 'Good answer', classes: 'green'});
      this.answerneeded -= 1;
      this.resetInputs();
      if (!this.answerneeded) {
        this.selectQuestion();
      }
    } else {
      M.toast({html: 'Wrong answer', classes: 'red'});
    }
  }

  resetInputs() {
    this.show = false;
    this.answer = '';
  }

  reverse() {
    const qs = this.questions.map((question) => ({origin: question.answer, answer: question.origin, enabled: question.enabled}));
    this.questions = qs;
  }
}
