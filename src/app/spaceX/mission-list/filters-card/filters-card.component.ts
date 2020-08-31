import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { yearButtons, isSuccess } from '../../../config/constants';

@Component({
  selector: 'app-filters-card',
  templateUrl: './filters-card.component.html',
  styleUrls: ['./filters-card.component.css']
})
export class FiltersCardComponent implements OnInit {
  @Input() selectedYear;
  @Input() isLaunchSuccess;
  @Input() isLandSuccess;
  @Output() selectYear = new EventEmitter();
  @Output() launchStatus = new EventEmitter();
  @Output() landStatus = new EventEmitter();
  yearButtons;
  isSuccess;

  emitSelectedYear(event) {
    this.selectYear.emit({ event: event });
  }

  emitLaunchStatus(event) {
    this.launchStatus.emit({ event: event });
  }

  emitLandStatus(event) {
    this.landStatus.emit({ event: event });
  }

  constructor() { }

  ngOnInit() {
    this.isSuccess = isSuccess;
    this.yearButtons = yearButtons;
  }

}
