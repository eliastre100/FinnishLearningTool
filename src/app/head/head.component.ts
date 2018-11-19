import { Component, OnInit } from '@angular/core';

declare var M: any;
interface QuestionType { origin: string; answer: string; enabled: boolean; }

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.sass']
})
export class HeadComponent implements OnInit {
  private questions: QuestionType[] = [
    { origin: 'Short',              answer: 'Lyhyt',                enabled: true },
    { origin: 'Long',               answer: 'Pitkä',                enabled: true },
    { origin: 'Medium long',        answer: 'keskipitkä',           enabled: true },
    { origin: 'Dark',               answer: 'Tumma',                enabled: true },
    { origin: 'Blond',              answer: 'Vaalea',               enabled: true },
    { origin: 'Red',                answer: 'Punainen',             enabled: true },
    { origin: 'Grey',               answer: 'Harmaa',               enabled: true },
    { origin: 'White',              answer: 'Valkoinen',            enabled: true },
    { origin: 'Black',              answer: 'Musta',                enabled: true },
    { origin: 'Brown',              answer: 'Ruskea',               enabled: true },
    { origin: 'Light brown',        answer: 'vaaleanruskea',        enabled: true },
    { origin: 'Dark brown',         answer: 'Tummanruskea',         enabled: true },
    { origin: 'Hair',               answer: 'Tukka',                enabled: true },
    { origin: 'Bald',               answer: 'Kalju',                enabled: true },
    { origin: 'Beard',              answer: 'Parta',                enabled: true },
    { origin: 'Moustache',          answer: 'Viikset',              enabled: true },
    { origin: 'Blue eyes',          answer: 'Siniset silmät',       enabled: true },
    { origin: 'Green eyes',         answer: 'Vihreät silmät',       enabled: true },
    { origin: 'Blueish green eyes', answer: 'Sinivihreät silmät',   enabled: true },
    { origin: 'Blueish grey eyes',  answer: 'Siniharmaat silmät',  enabled: true },
    { origin: 'Brown eyes',         answer: 'Ruskeat silmät',       enabled: true },
    { origin: 'Black eye',          answer: 'Musta silmä',          enabled: true },
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
      q = enabledQuestions[Math.floor(Math.random() * 10000) % enabledQuestions.length];
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
