import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private notes = [
    {
      id: 0,
      name: '',
      musiqwikText: '=',
      isTonic: false
    },
    // Première octave
    {
      id: 1,
      name: 'Do',
      musiqwikText: 'r',
      isTonic: true
    },
    {
      id: 3,
      name: 'Do#',
      musiqwikText: 'Òr',
      isTonic: true
    },
    {
      id: 4,
      name: 'Réb',
      musiqwikText: 'ãs',
      isTonic: true
    },
    {
      id: 6,
      name: 'Ré',
      musiqwikText: 's',
      isTonic: true
    },
    {
      id: 8,
      name: 'Ré#',
      musiqwikText: 'Ós',
      isTonic: true
    },
    {
      id: 9,
      name: 'Mib',
      musiqwikText: 'ät',
      isTonic: true
    },
    {
      id: 11,
      name: 'Mi',
      musiqwikText: 't',
      isTonic: true
    },
    {
      id: 12,
      name: 'Fab',
      musiqwikText: 'åu',
      isTonic: false
    },
    {
      id: 13,
      name: 'Mi#',
      musiqwikText: 'Ôt',
      isTonic: false
    },
    {
      id: 14,
      name: 'Fa',
      musiqwikText: 'u',
      isTonic: true
    },
    {
      id: 16,
      name: 'Fa#',
      musiqwikText: 'Õu',
      isTonic: true
    },
    {
      id: 17,
      name: 'Solb',
      musiqwikText: 'æv',
      isTonic: true
    },
    {
      id: 19,
      name: 'Sol',
      musiqwikText: 'v',
      isTonic: true
    },
    {
      id: 21,
      name: 'Sol#',
      musiqwikText: 'Öv',
      isTonic: true
    },
    {
      id: 22,
      name: 'Lab',
      musiqwikText: 'çw',
      isTonic: true
    },
    {
      id: 24,
      name: 'La',
      musiqwikText: 'w',
      isTonic: true
    },
    {
      id: 26,
      name: 'La#',
      musiqwikText: '×w',
      isTonic: true
    },
    {
      id: 27,
      name: 'Sib',
      musiqwikText: 'èx',
      isTonic: false
    },
    {
      id: 29,
      name: 'Si',
      musiqwikText: 'x',
      isTonic: false
    },
    {
      id: 30,
      name: 'Dob',
      musiqwikText: 'éy',
      isTonic: false
    },
    {
      id: 31,
      name: 'Si#',
      musiqwikText: 'Øx',
      isTonic: false
    },
    // Deuxième octave
    {
      id: 32,
      name: 'Do',
      musiqwikText: 'y',
      isTonic: false
    },
    {
      id: 34,
      name: 'Do#',
      musiqwikText: 'Ùy',
      isTonic: false
    },
    {
      id: 35,
      name: 'Réb',
      musiqwikText: 'êz',
      isTonic: false
    },
    {
      id: 37,
      name: 'Ré',
      musiqwikText: 'z',
      isTonic: false
    },
    {
      id: 39,
      name: 'Ré#',
      musiqwikText: 'Úz',
      isTonic: false
    },
    {
      id: 40,
      name: 'Mib',
      musiqwikText: 'ë{',
      isTonic: false
    },
    {
      id: 42,
      name: 'Mi',
      musiqwikText: '{',
      isTonic: false
    },
    {
      id: 43,
      name: 'Fab',
      musiqwikText: 'ì|',
      isTonic: false
    },
    {
      id: 44,
      name: 'Mi#',
      musiqwikText: 'Û{',
      isTonic: false
    },
    {
      id: 45,
      name: 'Fa',
      musiqwikText: '|',
      isTonic: false
    },
    {
      id: 47,
      name: 'Fa#',
      musiqwikText: 'Ü|',
      isTonic: false
    },
    {
      id: 48,
      name: 'Solb',
      musiqwikText: 'í}',
      isTonic: false
    },
    {
      id: 50,
      name: 'Sol',
      musiqwikText: '}',
      isTonic: false
    },
    {
      id: 52,
      name: 'Sol#',
      musiqwikText: 'Ý}',
      isTonic: false
    },
    {
      id: 53,
      name: 'Lab',
      musiqwikText: '~',
      isTonic: false
    },
    {
      id: 55,
      name: 'La',
      musiqwikText: 'î~',
      isTonic: false
    },
    {
      id: 57,
      name: 'La#',
      musiqwikText: 'Þ~',
      isTonic: false
    },
    {
      id: 58,
      name: 'Sib',
      musiqwikText: 'Þy',
      isTonic: false
    },
    {
      id: 60,
      name: 'Si',
      musiqwikText: '&#732;',
      isTonic: false
    },
    {
      id: 61,
      name: 'Dob',
      musiqwikText: 'y',
      isTonic: false
    },
    {
      id: 62,
      name: 'Si#',
      musiqwikText: 'y',
      isTonic: false
    }
  ];

  constructor() { }

  public getAll() {
    return this.notes;
  }

  public getTonics() {
    return this.notes.filter(note => note.isTonic);
  }
}
