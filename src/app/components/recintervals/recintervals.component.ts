import { Component, OnInit } from '@angular/core';
import { find } from 'rxjs';
import { IntervalsService } from 'src/app/services/intervals.service';
import { NotesService } from 'src/app/services/notes.service';
import { RecintervalslevelsService } from 'src/app/services/recintervalslevels.service';
import { StorageService } from 'src/app/services/storage.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { WebaudioService } from 'src/app/services/webaudio.service';

@Component({
  selector: 'app-recintervals',
  templateUrl: './recintervals.component.html',
  styleUrls: ['./recintervals.component.scss']
})
export class RecintervalsComponent implements OnInit {

  public levels: any[] = [];
  public elements: any[] = [];
  public notes: any[] = [];
  public selLevel: any;
  public selResponse: any = {};
  private levelStorageKey: string = 'recintervals_level';
  public rightAnsStorageKey = 'recintervals_right_ans';
  public questionsStorageKey = 'recintervals_questions';

  public randomElement: any = {};
  public elementNotes: any[] = [];

  public rightAnswers: any[] = [];
  public questions: any[] = [];

  public responseSelectIsDisabled: boolean = true;
  public areButtonsDisabled = [false, true, true];
  public feedbackColor = 'text-dark';
  public feedbackText = '';
     

  constructor(
    private levelsService: RecintervalslevelsService,
    private storageService: StorageService,
    private intervalsService: IntervalsService,
    private notesService: NotesService,
    private webAudioService: WebaudioService,
    public utilitiesService: UtilitiesService
  ) { }

  ngOnInit(): void {
    // localStorage.removeItem(this.levelStorageKey);
    this.notes = this.notesService.getAll();
    this.levels = this.levelsService.getAll();
    this.elements = this.intervalsService.getAll();
    this.selLevel = this.levels.find(level => level.id === 1);
    this.selResponse = this.elements.find(element => element.id === this.selLevel.intervalIds[0]);
    this.initElementNotes();
    this.loadSelLevel();
    this.rightAnswers = this.storageService.getArrayFromLocalStorage(this.rightAnsStorageKey);
    this.questions = this.storageService.getArrayFromLocalStorage(this.questionsStorageKey);
  }

  public saveSelLevel() {
    this.storageService.saveObject(this.levelStorageKey, this.selLevel);

    this.initElementNotes();
    this.areButtonsDisabled = [false, true, true];
    this.responseSelectIsDisabled = true;
    this.feedbackText = '';
  }

  public loadSelLevel() {
    const objectFromStorage = this.storageService.getObjectFromLocalStorage(this.levelStorageKey);
    if(Object.keys(objectFromStorage).length > 0) {
      this.selLevel = this.levels.find(level => level.id === objectFromStorage.id);
    }
  }

  public getSelLevelsIntervals() {
    let elements = [];
    elements = this.elements.filter(element => this.selLevel.intervalIds.includes(element.id));
    return elements;
  }

  public generateQuestion() {
    const intervalIds = this.selLevel.intervalIds;
    let intervalId = intervalIds[Math.floor(Math.random()*intervalIds.length)];
    this.randomElement = this.elements.find(element => element.id === intervalId);

    const tonics = this.notesService.getTonics();

    this.elementNotes = [];
    this.elementNotes.push(tonics[Math.floor(Math.random()*tonics.length)]);
    this.elementNotes.push(this.notes.find(note => note.id == this.elementNotes[0].id + this.randomElement.size));

    if(this.elementNotes[1] === undefined) {
      this.generateQuestion();
      return;
    }

    this.responseSelectIsDisabled = false;
    this.areButtonsDisabled = [true, false, false];
    this.feedbackText = '';
    this.feedbackColor = 'text-dark';
    this.selResponse = this.elements.find(element => element.id === this.selLevel.intervalIds[0]);

    this.questions.push({
      levelId: this.selLevel.id,
      intervalId: this.randomElement.id
    });
    this.storageService.saveArray(this.questionsStorageKey, this.questions);
  }

  checkAnswer() {
    if(this.selResponse === this.randomElement) {
      this.rightAnswers.push({
        levelId: this.selLevel.id,
        intervalId: this.randomElement.id
      });
      this.storageService.saveArray(this.rightAnsStorageKey, this.rightAnswers);
      this.feedbackColor = 'text-success';
      this.feedbackText = 'Bonne réponse!';
    } else {
      this.feedbackColor = 'text-danger';
      this.feedbackText = 'Erreur! La bonne réponse était: ' + this.randomElement.name;
    }

    this.responseSelectIsDisabled = true;
    this.areButtonsDisabled = [false, true, true];
  }

  private initElementNotes() {
    this.elementNotes = [];
    for(let i=0; i<2; i++) {
      this.elementNotes.push(this.notes.find(note => note.id === 0));
    }
  }

  public initStats() {
    this.rightAnswers = [];
    this.questions = [];

    this.storageService.saveArray(this.rightAnsStorageKey, this.rightAnswers);
    this.storageService.saveArray(this.questionsStorageKey, this.questions);
  }

  public playElement() {
    // On arrête toutes les sources actives
    this.webAudioService.stopAll();
    // On réinitialise l'array de sources
    this.webAudioService.sources = [];
    this.elementNotes.forEach(function(this: any, note: any, index: number){
      this.webAudioService.play(this.webAudioService[note.sound], 1.5*index);
    }.bind(this));
  }
}
