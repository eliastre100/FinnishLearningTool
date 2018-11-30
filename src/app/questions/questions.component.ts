import { Component, OnInit } from '@angular/core';

declare var M: any;
interface QuestionType { origin: string; answer: string; instruction: string | null; enabled: boolean; }

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.sass']
})
export class QuestionsComponent implements OnInit {
  private questions: QuestionType[] = [
    { origin: 'Mikä sinun nimi on?', answer: '(Minun nimi on) [Name]', instruction: null, enabled: true },
    { origin: 'Mikä sinun etunimi on?', answer: 'Minun etunimi on [First name]', instruction: null, enabled: true },
    { origin: 'Mikä sinun sukunimi on?', answer: 'Minun sukunimi on [Last Name]', instruction: null, enabled: true },
    { origin: 'Mistä maasta sinä olet kotoisin?', answer: 'Minä olen kotoisin [Country (ending sta)]', instruction: null, enabled: true },
    { origin: 'Onko sinulla auto?', answer: 'Joo/Ei', instruction: null, enabled: true },
    { origin: 'Kuinka monta autoa sinulla on?', answer: 'Minulla on yksi auto/Ei yhtään', instruction: null, enabled: true },
    { origin: 'Puhutko sinä englantia?', answer: 'Joo, tosi hyvin', instruction: null, enabled: true },
    { origin: 'Entä ranskaa tai saksaa?', answer: 'Minä puhun vähän ranskaa ja saksaa minä en puhu yhtään.', instruction: null, enabled: true },
    { origin: 'Pidatkö sinä musiikista?', answer: 'Joo, tosi paljon/En', instruction: null, enabled: true },
    { origin: 'Mistä musiikista sinä pidät?', answer: '(Minä pidän) kaikesta musiikista {all music} - klassisesta {classical} - hiphopista {hiphop} - hevistä {heavy metal}', instruction: null, enabled: true },
    { origin: 'Pidätko sinä oopperasta?', answer: 'En, minä inhoan oopperaa!', instruction: null, enabled: true },
    { origin: 'Missä sinä olet töissä', answer: 'Minä en ole töissä. Minä opiskelen / (Minä olen töissa) siivousfirmassa', instruction: null, enabled: true },
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
    this.show = false;
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
