import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecintervalslevelsService {

  private levels =  [
    {
      id: 1,
      description: 'Secondes et tierces mineures et majeures'
    },
    {
      id: 2,
      description: 'Toutes les secondes et tierces'
    },
  ];

  constructor() { }

  getAll() {
    return this.levels;
  }
}
