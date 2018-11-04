import { Component, OnInit } from '@angular/core';

declare var M: any;
interface QuestionType { origin: string; answer: string; enabled: boolean; }

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.sass']
})
export class DaysComponent implements OnInit {
  private questions: QuestionType[] = [
    { origin: 'Monday', answer: 'Maanantai', enabled: true },
    { origin: 'Tuesday', answer: 'Tiistai', enabled: true },
    { origin: 'Wednesday', answer: 'Keskiviikko', enabled: true },
    { origin: 'Thursday', answer: 'Torstai', enabled: true },
    { origin: 'Friday', answer: 'Perjantai', enabled: true },
    { origin: 'Saturday', answer: 'Lauantai', enabled: true },
    { origin: 'Sunday', answer: 'Sunnuntai', enabled: true },
    { origin: 'Weekend', answer: 'Viikonloppu', enabled: false }
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
      q = enabledQuestions[Math.floor(Math.random() * 10) % enabledQuestions.length];
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
