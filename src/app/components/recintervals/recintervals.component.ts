import { Component, OnInit } from '@angular/core';
import { RecintervalslevelsService } from 'src/app/services/recintervalslevels.service';

@Component({
  selector: 'app-recintervals',
  templateUrl: './recintervals.component.html',
  styleUrls: ['./recintervals.component.scss']
})
export class RecintervalsComponent implements OnInit {

  public levels: any[] = [];
  public selLevel: any;

  constructor(private levelsService: RecintervalslevelsService) { }

  ngOnInit(): void {
    this.levels = this.levelsService.getAll();
    this.selLevel = this.levels.find(level => level.id === 1);
  }

}
