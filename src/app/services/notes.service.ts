import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private notes = [
    // Première octave
    {
      id: 1,
      name: 'Do'
    },
    {
      id: 3,
      name: 'Do#'
    },
    {
      id: 4,
      name: 'Réb'
    },
    {
      id: 6,
      name: 'Ré'
    },
    {
      id: 8,
      name: 'Ré#'
    },
    {
      id: 9,
      name: 'Mib'
    },
    {
      id: 11,
      name: 'Mi'
    },
    {
      id: 12,
      name: 'Fab'
    },
    {
      id: 13,
      name: 'Mi#'
    },
    {
      id: 14,
      name: 'Fa'
    },
    {
      id: 16,
      name: 'Fa#'
    },
    {
      id: 17,
      name: 'Solb'
    },
    {
      id: 19,
      name: 'Sol'
    },
    {
      id: 21,
      name: 'Sol#'
    },
    {
      id: 22,
      name: 'Lab'
    },
    {
      id: 24,
      name: 'La'
    },
    {
      id: 26,
      name: 'La#'
    },
    {
      id: 27,
      name: 'Sib'
    },
    {
      id: 29,
      name: 'Si'
    },
    {
      id: 30,
      name: 'Dob'
    },
    {
      id: 31,
      name: 'Si#'
    }
  ];

  constructor() { }
}
