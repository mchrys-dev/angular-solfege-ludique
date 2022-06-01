import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveObject(key: string, value:Object) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getObjectFromLocalStorage(key: string) {
    const keyString = localStorage.getItem(key) as string;
    let objectFromStorage: any = {};
    if(keyString !== null) {
      objectFromStorage = JSON.parse(keyString);
    }
    return objectFromStorage;
  }

  saveArray(key: string, value: any[]) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getArrayFromLocalStorage(key: string) {
    const keyString = localStorage.getItem(key) as string;
    let arrayFromStorage: any = [];
    if(keyString !== null) {
      arrayFromStorage = JSON.parse(keyString);
    }
    return arrayFromStorage;
  }
}
