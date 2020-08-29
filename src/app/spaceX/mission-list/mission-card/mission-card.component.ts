import { Component, OnInit, Input } from '@angular/core';
import { MissionDetail } from 'src/app/models';

@Component({
  selector: 'app-mission-card',
  templateUrl: './mission-card.component.html',
  styleUrls: ['./mission-card.component.css']
})
export class MissionCardComponent implements OnInit {
  @Input() missionDetails: MissionDetail[];

  constructor() { }

  ngOnInit() {
  }

}
