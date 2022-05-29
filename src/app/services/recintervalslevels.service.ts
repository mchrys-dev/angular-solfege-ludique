import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecintervalslevelsService {

  private levels =  [
    {
      id: 1,
      description: 'Secondes et tierces mineures et majeures',
      intervalIds: [1, 2, 5, 6]
    },
    {
      id: 2,
      description: 'Toutes les secondes et tierces',
      intervalIds: [1, 2, 3, 4, 5, 6, 7]
    },
  ];

  constructor() { }

  getAll() {
    return this.levels;
  }
}
