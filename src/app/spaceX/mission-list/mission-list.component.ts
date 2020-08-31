import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../../services/space-x.service';
import { MissionDetail } from 'src/app/models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {
  missionDetails: MissionDetail[] = [];
  selectedYear;
  isLaunchSuccess;
  isLandSuccess;

  selectYear($event) {
    this.selectedYear = $event.event.target.value;
    this.navigate();
    this.getFilteredData();
  }

  selectLaunchStatus($event) {
    this.isLaunchSuccess = $event.event.target.value;
    this.navigate();
    this.getFilteredData();
  }

  selectLandStatus($event) {
    this.isLandSuccess = $event.event.target.value;
    this.navigate();
    this.getFilteredData();
  }

  navigate() {
    this.router.navigate(['/filter'], {
      queryParams: {
        year: this.selectedYear,
        launchSucess: this.isLaunchSuccess, landSucess: this.isLandSuccess
      }
    });

  }

  getFilteredData() {
    this.spaceXService.
      getFilteredData(this.selectedYear, this.isLaunchSuccess, this.isLandSuccess).
      subscribe(data => this.missionDetails = data as MissionDetail[]);
  }

  constructor(private spaceXService: SpaceXService, private router: Router,
    private currentRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.currentRoute.queryParamMap.subscribe(params => {
      this.selectedYear = params.get('year');
      this.isLandSuccess = params.get('landSucess');
      this.isLaunchSuccess = params.get('launchSucess');
      this.getFilteredData();
    });
  }

}
