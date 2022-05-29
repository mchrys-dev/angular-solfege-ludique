import { Component, OnInit } from '@angular/core';
import { IntervalsService } from 'src/app/services/intervals.service';
import { RecintervalslevelsService } from 'src/app/services/recintervalslevels.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-recintervals',
  templateUrl: './recintervals.component.html',
  styleUrls: ['./recintervals.component.scss']
})
export class RecintervalsComponent implements OnInit {

  public levels: any[] = [];
  public intervals: any[] = [];
  public selLevel: any;
  public selResponse: any = {};
  public responseSelectIsDisabled: boolean = true;
  private levelStorageKey: string = 'recintervals_level';

  constructor(
    private levelsService: RecintervalslevelsService,
    private storageService: StorageService,
    private intervalsService: IntervalsService
  ) { }

  ngOnInit(): void {
    // localStorage.removeItem(this.levelStorageKey);
    this.levels = this.levelsService.getAll();
    this.intervals = this.intervalsService.getAll();
    this.selLevel = this.levels.find(level => level.id === 1);
    this.selResponse = this.intervals.find(interval => interval.id === this.selLevel.intervalIds[0]);
    this.loadSelLevel();
  }

  public saveSelLevel() {
    this.storageService.saveObject(this.levelStorageKey, this.selLevel);
  }

  public loadSelLevel() {
    const objectFromStorage = this.storageService.getObjectFromLocalStorage(this.levelStorageKey);
    if(Object.keys(objectFromStorage).length > 0) {
      this.selLevel = this.levels.find(level => level.id === objectFromStorage.id);
    }
  }

  public getSelLevelsIntervals() {
    let intervals = [];
    intervals = this.intervals.filter(interval => this.selLevel.intervalIds.includes(interval.id));
    return intervals;
  }

}
