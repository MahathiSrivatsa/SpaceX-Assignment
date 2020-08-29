import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../../services/space-x.service';
import { MissionDetail } from 'src/app/models';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {
  missionDetails: MissionDetail[] = [];

  constructor(private spaceXService: SpaceXService) { }

  ngOnInit() {
    this.spaceXService.getAll().subscribe(data => { this.missionDetails = data as MissionDetail[]; console.log(data); });
  }

}
