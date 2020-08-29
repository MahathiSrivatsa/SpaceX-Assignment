import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters-card',
  templateUrl: './filters-card.component.html',
  styleUrls: ['./filters-card.component.css']
})
export class FiltersCardComponent implements OnInit {
  yearButtons = ['2006', '2007', '2008', '2009', '2010', '2011', '2012',
    '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];

  isSuccess = ['Yes', 'No'];
  selectedYear;
  isLaunchSuccess;
  isLandSuccess;

  selectYear(event) {
    this.selectedYear = event.target.value;
  }

  selectLaunchStatus(event) {
    this.isLaunchSuccess = event.target.value;
  }

  selectLandStatus(event) {
    this.isLandSuccess = event.target.value;
  }


  constructor() { }

  ngOnInit() {
  }

}
