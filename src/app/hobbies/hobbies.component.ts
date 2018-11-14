import { Component, OnInit } from '@angular/core';

declare var M: any;
interface QuestionType { origin: string; answer: string; instruction: string | null; enabled: boolean; }

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.sass']
})
export class HobbiesComponent implements OnInit {
  private questions: QuestionType[] = [
    { origin: 'Football', answer: 'Jalkapalloa', instruction: null, enabled: true },
    { origin: 'Football', answer: 'Futista', instruction: 'Slang version', enabled: true },
    { origin: 'Basketball', answer: 'Koripalloa', instruction: null, enabled: true },
    { origin: 'Cooking', answer: 'Ruuanlaittoa', instruction: null, enabled: true },
    { origin: 'Shopping', answer: 'Shoppailua', instruction: null, enabled: true },
    { origin: 'Listening to the music', answer: 'Musiikinkuuntelua', instruction: null, enabled: true },
    { origin: 'Watching TV', answer: 'Telkkarin katselua', instruction: null, enabled: true },
    { origin: 'Sports', answer: 'Urheilua', instruction: null, enabled: true },
    { origin: 'Photography', answer: 'Valokuvaamista', instruction: null, enabled: true },
    { origin: 'Running', answer: 'Juoksemista', instruction: null, enabled: true },
    { origin: 'Travelling', answer: 'Matkustamista', instruction: null, enabled: true },
    { origin: 'Dancing', answer: 'Tanssimista', instruction: null, enabled: true },
    { origin: 'Swimming', answer: 'Uimista', instruction: null, enabled: true },
    { origin: 'Reading', answer: 'Lukemista', instruction: null, enabled: true },
    { origin: 'Hose riding', answer: 'Ratsastamista', instruction: null, enabled: true },
    { origin: 'Playing the piano', answer: 'Pianonsoittoa', instruction: null, enabled: true },
    { origin: 'Playing the guitar', answer: 'Kitaransoittoa', instruction: null, enabled: true },
    { origin: 'Playing the bass', answer: 'Bassonsoittoa', instruction: null, enabled: false },
    { origin: 'Cycling', answer: 'Pyöräilyä', instruction: null, enabled: true },
    { origin: 'Tennis', answer: 'Tennistä', instruction: null, enabled: true },
    { origin: 'Golf', answer: 'Golfia', instruction: null, enabled: true },
    { origin: 'Downhill skiing', answer: 'Laskettelua', instruction: null, enabled: true },
    { origin: 'Skiing', answer: 'Hintämistä', instruction: null, enabled: true },
    { origin: 'To have something as hobby', answer: 'Harrasta', instruction: null, enabled: true }
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
    const qs = this.questions.map((question) => ({
      origin: question.answer,
      answer: question.origin,
      instruction: question.instruction,
      enabled: question.enabled
    }));
    this.questions = qs;
  }
}
