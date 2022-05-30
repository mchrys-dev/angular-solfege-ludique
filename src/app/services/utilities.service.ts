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
}
