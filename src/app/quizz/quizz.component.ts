import { Component, OnInit } from '@angular/core';
import {QuizzService} from '../quizz.service';

declare var M: any;
interface QuestionType { origin: string; answer: string; instruction: string | null; enabled: boolean; }

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.sass']
})
export class QuizzComponent implements OnInit {
  private questions: QuestionType[];
  public answerneeded = 1;
  public title = null;
  public question = null;
  public course = false;
  public show = false;
  public answer = '';

  constructor(private quizz: QuizzService) {}

  ngOnInit() {
    const quizz = this.quizz.get('kaupassa');
    this.title = quizz.name;
    this.questions = quizz.questions;
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
