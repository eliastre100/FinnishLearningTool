import { Component, OnInit } from '@angular/core';

declare var M: any;
interface QuestionType { origin: string; answer: string; enabled: boolean; }

@Component({
  selector: 'app-doing',
  templateUrl: './doing.component.html',
  styleUrls: ['./doing.component.sass']
})
export class DoingComponent implements OnInit {
  private questions: QuestionType[] = [
    { origin: 'I eat a banana', answer: 'Minä syön banaania', enabled: true },
    { origin: 'I drink water', answer: 'Minä juon vettä', enabled: true },
    { origin: 'I watch the TV', answer: 'Minä katson telkkaria', enabled: true },
    { origin: 'I sit on a chair', answer: 'Minä istun tuolilla', enabled: true },
    { origin: 'I walk in a forest', answer: 'Minä kävelen metsässä', enabled: true },
    { origin: 'I write an email', answer: 'Minä kirjoitan sähköpostia', enabled: true },
    { origin: 'I read a magazine', answer: 'Minä luen lehteä', enabled: true },
    { origin: 'I go to a store', answer: 'Minä käyn kaupassa', enabled: true },
    { origin: 'I take (=go) a bus home', answer: 'Minä menen bussilla kotiin', enabled: true },
    { origin: 'I dance tango', answer: 'Minä tanssin tangoa', enabled: true },
    { origin: 'I give you a pen', answer: 'Minä annan sinulle kynän', enabled: true },
    { origin: 'I take a paper in my hand', answer: 'Minä otan paperin käteen', enabled: true },
    { origin: 'I take drive a car', answer: 'Minä ajan autoa', enabled: true },
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
