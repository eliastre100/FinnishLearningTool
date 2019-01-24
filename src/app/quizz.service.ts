import { Injectable } from '@angular/core';
import questions from './questions';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {
  constructor() { }

  get(collectionName: String) {
    return questions[collectionName];
  }
}
