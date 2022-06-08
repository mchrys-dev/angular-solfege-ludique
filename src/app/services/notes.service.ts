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
      sound: '',
      isTonic: false
    },
    // Première octave
    {
      id: 1,
      name: 'Do',
      musiqwikText: 'r',
      sound: 'C4',
      isTonic: true
    },
    {
      id: 3,
      name: 'Do#',
      musiqwikText: 'Òr',
      sound: 'Csharp4',
      isTonic: true
    },
    {
      id: 4,
      name: 'Réb',
      musiqwikText: 'ãs',
      sound: 'Db4',
      isTonic: true
    },
    {
      id: 6,
      name: 'Ré',
      musiqwikText: 's',
      sound: 'D4',
      isTonic: true
    },
    {
      id: 8,
      name: 'Ré#',
      musiqwikText: 'Ós',
      sound: 'Dsharp4',
      isTonic: true
    },
    {
      id: 9,
      name: 'Mib',
      musiqwikText: 'ät',
      sound: 'Eb4',
      isTonic: true
    },
    {
      id: 11,
      name: 'Mi',
      musiqwikText: 't',
      sound: 'E4',
      isTonic: true
    },
    {
      id: 12,
      name: 'Fab',
      musiqwikText: 'åu',
      sound: 'Fb4',
      isTonic: false
    },
    {
      id: 13,
      name: 'Mi#',
      musiqwikText: 'Ôt',
      sound: 'Esharp4',
      isTonic: false
    },
    {
      id: 14,
      name: 'Fa',
      musiqwikText: 'u',
      sound: 'F4',
      isTonic: true
    },
    {
      id: 16,
      name: 'Fa#',
      musiqwikText: 'Õu',
      sound: 'Fsharp4',
      isTonic: true
    },
    {
      id: 17,
      name: 'Solb',
      musiqwikText: 'æv',
      sound: 'Gb4',
      isTonic: true
    },
    {
      id: 19,
      name: 'Sol',
      musiqwikText: 'v',
      sound: 'G4',
      isTonic: true
    },
    {
      id: 21,
      name: 'Sol#',
      musiqwikText: 'Öv',
      sound: 'Gsharp4',
      isTonic: true
    },
    {
      id: 22,
      name: 'Lab',
      musiqwikText: 'çw',
      sound: 'Ab4',
      isTonic: true
    },
    {
      id: 24,
      name: 'La',
      musiqwikText: 'w',
      sound: 'A4',
      isTonic: true
    },
    {
      id: 26,
      name: 'La#',
      musiqwikText: '×w',
      sound: 'Asharp4',
      isTonic: true
    },
    {
      id: 27,
      name: 'Sib',
      musiqwikText: 'èx',
      sound: 'Bb4',
      isTonic: false
    },
    {
      id: 29,
      name: 'Si',
      musiqwikText: 'x',
      sound: 'B4',
      isTonic: false
    },
    {
      id: 30,
      name: 'Dob',
      musiqwikText: 'éy',
      sound: 'Cb5',
      isTonic: false
    },
    {
      id: 31,
      name: 'Si#',
      musiqwikText: 'Øx',
      sound: 'Bsharp4',
      isTonic: false
    },
    // Deuxième octave
    {
      id: 32,
      name: 'Do',
      musiqwikText: 'y',
      sound: 'C5',
      isTonic: false
    },
    {
      id: 34,
      name: 'Do#',
      musiqwikText: 'Ùy',
      sound: 'Csharp5',
      isTonic: false
    },
    {
      id: 35,
      name: 'Réb',
      musiqwikText: 'êz',
      sound: 'Db5',
      isTonic: false
    },
    {
      id: 37,
      name: 'Ré',
      musiqwikText: 'z',
      sound: 'D5',
      isTonic: false
    },
    {
      id: 39,
      name: 'Ré#',
      musiqwikText: 'Úz',
      sound: 'Dsharp5',
      isTonic: false
    },
    {
      id: 40,
      name: 'Mib',
      musiqwikText: 'ë{',
      sound: 'Eb5',
      isTonic: false
    },
    {
      id: 42,
      name: 'Mi',
      musiqwikText: '{',
      sound: 'E5',
      isTonic: false
    },
    {
      id: 43,
      name: 'Fab',
      musiqwikText: 'ì|',
      sound: 'Fb5',
      isTonic: false
    },
    {
      id: 44,
      name: 'Mi#',
      musiqwikText: 'Û{',
      sound: 'Esharp5',
      isTonic: false
    },
    {
      id: 45,
      name: 'Fa',
      musiqwikText: '|',
      sound: 'F5',
      isTonic: false
    },
    {
      id: 47,
      name: 'Fa#',
      musiqwikText: 'Ü|',
      sound: 'Fsharp5',
      isTonic: false
    },
    {
      id: 48,
      name: 'Solb',
      musiqwikText: 'í}',
      sound: 'Gb5',
      isTonic: false
    },
    {
      id: 50,
      name: 'Sol',
      musiqwikText: '}',
      sound: 'G5',
      isTonic: false
    },
    {
      id: 52,
      name: 'Sol#',
      musiqwikText: 'Ý}',
      sound: 'Gsharp5',
      isTonic: false
    },
    {
      id: 53,
      name: 'Lab',
      musiqwikText: '~',
      sound: 'Ab5',
      isTonic: false
    },
    {
      id: 55,
      name: 'La',
      musiqwikText: 'î~',
      sound: 'A5',
      isTonic: false
    },
    {
      id: 57,
      name: 'La#',
      musiqwikText: 'Þ~',
      sound: 'Asharp5',
      isTonic: false
    },
    {
      id: 58,
      name: 'Sib',
      musiqwikText: 'Þy',
      sound: 'Bb5',
      isTonic: false
    },
    {
      id: 60,
      name: 'Si',
      musiqwikText: '&#732;',
      sound: 'B5',
      isTonic: false
    },
    {
      id: 61,
      name: 'Dob',
      musiqwikText: 'y',
      sound: 'Cb6',
      isTonic: false
    },
    {
      id: 62,
      name: 'Si#',
      musiqwikText: 'y',
      sound: 'Bsharp5',
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
