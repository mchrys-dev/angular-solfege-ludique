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
    {
      id: 3,
      description: 'Toutes les quartes et quintes',
      intervalIds: [8, 9, 10, 11, 12, 13]
    },
    {
      id: 4,
      description: 'Sixtes et septièmes mineures et majeures',
      intervalIds: [15, 16, 19, 20]
    },
    {
      id: 5,
      description: 'Toutes les sixtes et septièmes',
      intervalIds: [14, 15, 16, 17, 18, 19, 20]
    },
    {
      id: 6,
      description: 'Tous les intervalles de la seconde à la septième',
      intervalIds: [Array.from({length: 20}, (_, i) => i + 1)]
    },
  ];

  constructor() { }

  getAll() {
    return this.levels;
  }
}
