import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntervalsService {

  private intervals = [
    {
      id: 1,
      name: 'seconde mineure',
      size: 3
    },
    {
      id: 2,
      name: 'seconde majeure',
      size: 5
    },
    {
      id: 3,
      name: 'seconde augmentée',
      size: 7
    },
    {
      id: 4,
      name: 'tierce diminuée',
      size: 6
    },
    {
      id: 5,
      name: 'tierce mineure',
      size: 8
    },
    {
      id: 6,
      name: 'tierce majeure',
      size: 10
    },
    {
      id: 7,
      name: 'tierce augmentée',
      size: 12
    },
    {
      id: 8,
      name: 'quarte diminuée',
      size: 11
    },
    {
      id: 9,
      name: 'quarte juste',
      size: 13
    },
    {
      id: 10,
      name: 'quarte augmentée',
      size: 15
    },
    {
      id: 11,
      name: 'quinte diminuée',
      size: 16
    },
    {
      id: 12,
      name: 'quinte juste',
      size: 18
    },
    {
      id: 13,
      name: 'quinte augmentée',
      size: 20
    },
    {
      id: 14,
      name: 'sixte diminuée',
      size: 19
    },
    {
      id: 15,
      name: 'sixte mineure',
      size: 21
    },
    {
      id: 16,
      name: 'sixte majeure',
      size: 23
    },
    {
      id: 17,
      name: 'sixte augmentée',
      size: 25
    },
    {
      id: 18,
      name: 'septième diminuée',
      size: 24
    },
    {
      id: 19,
      name: 'septième mineure',
      size: 26
    },
    {
      id: 20,
      name: 'septième majeure',
      size: 28
    }
  ];

  constructor() { }

  public getAll() {
    return this.intervals;
  }
}
