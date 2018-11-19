import { Component, OnInit } from '@angular/core';

declare var M: any;
interface QuestionType { origin: string; answer: string; instruction: string | null; enabled: boolean; }

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.sass']
})
export class PersonsComponent implements OnInit {
  private questions: QuestionType[] = [
    { origin: 'A woman', answer: 'Nainen', instruction: null, enabled: true },
    { origin: 'Women', answer: 'Naiset', instruction: 'Slang version', enabled: true },
    { origin: 'Two women', answer: 'Kaks naista', instruction: null, enabled: true },
    { origin: 'A man', answer: 'Mies', instruction: null, enabled: true },
    { origin: 'Men', answer: 'Miehet', instruction: null, enabled: true },
    { origin: 'Two men', answer: 'Kaks miestä', instruction: null, enabled: true },
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
    const qs = this.questions.map((question) => ({
      origin: question.answer,
      answer: question.origin,
      instruction: question.instruction,
      enabled: question.enabled
    }));
    this.questions = qs;
  }
}
