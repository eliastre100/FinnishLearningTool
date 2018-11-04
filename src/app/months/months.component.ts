import { Component, OnInit } from '@angular/core';

declare var M: any;

interface QuestionType { origin: string, answer: string, enabled: boolean }
@Component({
  selector: 'app-months',
  templateUrl: './months.component.html',
  styleUrls: ['./months.component.sass']
})
export class MonthsComponent implements OnInit {
  private questions: QuestionType[] = [
    { origin: 'January', answer: 'Tammikuu', enabled: true },
    { origin: 'February', answer: 'Helmikuu', enabled: true },
    { origin: 'March', answer: 'Maaliskuu', enabled: true },
    { origin: 'April', answer: 'Huhtikuu', enabled: true },
    { origin: 'May', answer: 'Toukokuu', enabled: true },
    { origin: 'June', answer: 'Kesäkuu', enabled: true },
    { origin: 'July', answer: 'Heinäkuu', enabled: true },
    { origin: 'August', answer: 'Elokuu', enabled: true },
    { origin: 'September', answer: 'Syyskuu', enabled: true },
    { origin: 'October', answer: 'Lokakuu', enabled: true },
    { origin: 'November', answer: 'Marraskuu', enabled: true },
    { origin: 'December', answer: 'Joulukuu', enabled: true },
  ];
  public question = null;
  public course = false;
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
      q = enabledQuestions[Math.floor(Math.random() * 100) % enabledQuestions.length];
    } while (q === this.question && enabledQuestions.length > 1);
    this.question = q;
    this.show = false;
    this.answer = '';
  }

  checkAnswer() {
    if (this.answer.toLowerCase() === this.question.answer.toLowerCase()) {
      M.toast({html: 'Good answer', classes: 'green'});
      this.selectQuestion();
    } else {
      M.toast({html: 'Wrong answer', classes: 'red'});
    }
  }

  reverse() {
    const qs = this.questions.map((question) => ({ origin: question.answer, answer: question.origin, enabled: question.enabled }));
    this.questions = qs;
  }
}
