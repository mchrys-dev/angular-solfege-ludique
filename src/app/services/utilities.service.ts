import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  public getPercentage(num1: number, num2: number) {
    let percentage: number;
    num2 === 0 ? percentage = 0 : percentage = Math.round((num1 * 100) / num2);
    return percentage;
  }

  public getRightAnsByLevel(rightAns: any[], levelId: number) {
    return rightAns.filter(answer => answer.levelId === levelId);
  }

  public getQuestionsByLevel(questions: any[], levelId: number) {
    return questions.filter(question => question.levelId === levelId);
  }

  public getStatsPercentageByLevel(rightAnswers: any[], questions: any[], levelId: number) {
    return this.getPercentage(rightAnswers.length, questions.length);
  }

  public getProgressbarWidth(rightAnswers: any[], questions: any[], levelId: number) {
    return 'width: ' + this.getStatsPercentageByLevel(rightAnswers, questions, levelId) + '%';
  }
}
