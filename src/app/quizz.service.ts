import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface QuestionType { origin: string; answer: string; instruction: string | null; enabled: boolean; }
interface Quizz {
  name: string;
  langs: {
    origin: string
    answer: string
    [key: string]: string
  };
  questions: QuestionType[];
}

@Injectable({
  providedIn: 'root'
})
export class QuizzService {
  private questions: {[key: string]: Quizz} = null;

  constructor(private http: HttpClient) { }

  async get(collectionName: string) {
    if (this.questions === null) {
      await this.getQuestionsFromServer();
    }
    return this.questions[collectionName];
  }

  private getQuestionsFromServer() {
    return new Promise((resolve, reject) => {
      this.http.get('/assets/questions.json').subscribe((distQuestions: {[key: string]: Quizz}) => {
        this.questions = distQuestions;
        resolve(distQuestions);
      }, (err) => { reject(err); });
    });
  }
}
