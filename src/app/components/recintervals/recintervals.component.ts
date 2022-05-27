import { Component, OnInit } from '@angular/core';
import { RecintervalslevelsService } from 'src/app/services/recintervalslevels.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-recintervals',
  templateUrl: './recintervals.component.html',
  styleUrls: ['./recintervals.component.scss']
})
export class RecintervalsComponent implements OnInit {

  public levels: any[] = [];
  public selLevel: any;
  private levelStorageKey: string = 'recintervals_level';

  constructor(
    private levelsService: RecintervalslevelsService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.levels = this.levelsService.getAll();
    this.selLevel = this.levels.find(level => level.id === 1);
    this.loadSelLevel();
  }

  public saveSelLevel() {
    this.storageService.saveObject(this.levelStorageKey, this.selLevel);
  }

  public loadSelLevel() {
    const objectFromStorage = this.storageService.getObjectFromLocalStorage(this.levelStorageKey);
    if(objectFromStorage.id !== 0) {
      this.selLevel = this.levels.find(level => level.id === objectFromStorage.id);
    }
  }

}
