import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionCardComponent } from './mission-list/mission-card/mission-card.component';
import { FiltersCardComponent } from './mission-list/filters-card/filters-card.component';
import { MissionListComponent } from './mission-list/mission-list.component';

@NgModule({
  declarations: [MissionCardComponent, FiltersCardComponent, MissionListComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    MissionCardComponent,
    FiltersCardComponent,
    MissionListComponent
  ]
})
export class SpaceXModule { }
