import { Component, OnInit } from '@angular/core';
import { IntervalsService } from 'src/app/services/intervals.service';
import { NotesService } from 'src/app/services/notes.service';
import { RecintervalslevelsService } from 'src/app/services/recintervalslevels.service';
import { StorageService } from 'src/app/services/storage.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-recintervals',
  templateUrl: './recintervals.component.html',
  styleUrls: ['./recintervals.component.scss']
})
export class RecintervalsComponent implements OnInit {

  public levels: any[] = [];
  public intervals: any[] = [];
  public notes: any[] = [];
  public selLevel: any;
  public selResponse: any = {};
  private levelStorageKey: string = 'recintervals_level';

  public randomInterval: any = {};
  public intervalNotes: any[] = [];

  public rightAnswers: any[] = [];
  public questions: any[] = [];

  public responseSelectIsDisabled: boolean = true;
  public areButtonsDisabled = [false, true];

  constructor(
    private levelsService: RecintervalslevelsService,
    private storageService: StorageService,
    private intervalsService: IntervalsService,
    private notesService: NotesService,
    public utilitiesService: UtilitiesService
  ) { }

  ngOnInit(): void {
    // localStorage.removeItem(this.levelStorageKey);
    this.notes = this.notesService.getAll();
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

  public generateInterval() {
    const intervalIds = this.selLevel.intervalIds;
    let intervalId = intervalIds[Math.floor(Math.random()*intervalIds.length)];
    this.randomInterval = this.intervals.find(interval => interval.id === intervalId);

    const tonics = this.notesService.getTonics();

    this.intervalNotes = [];
    this.intervalNotes.push(tonics[Math.floor(Math.random()*tonics.length)]);
    this.intervalNotes.push(this.notes.find(note => note.id == this.intervalNotes[0].id + this.randomInterval.size));

    if(this.intervalNotes[1] === undefined) {
      this.generateInterval();
    }

    this.questions.push({
      levelId: this.selLevel.id,
      intervalId: this.randomInterval.id
    });

    console.log(this.questions);
  }

}
