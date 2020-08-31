import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../config/config';
import { MissionDetail } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {

  private GET_ALL_URL = `${BASE_URL}/launches?limit=100`;

  getAll(): Observable<MissionDetail[]> {
    return this.httpClient.get<MissionDetail[]>(this.GET_ALL_URL);
  }

  getFilteredData(year, isLaunchSuccess, isLandSuccess) {
    let filterUrl = this.GET_ALL_URL;
    if (year) {
      filterUrl = filterUrl + `&launch_year=${year}`;
    }

    if (isLaunchSuccess) {
      const launchStatus = this.mapToBoolean(isLaunchSuccess);
      filterUrl = filterUrl + `&launch_success=${launchStatus}`;

    }
    if (isLandSuccess) {
      const landStatus = this.mapToBoolean(isLandSuccess);
      filterUrl = filterUrl + `&land_success=${landStatus}`;

    }
    return this.httpClient.get<MissionDetail[]>(filterUrl);

  }

  mapToBoolean(value) {
    let boolValue;
    if (value === 'Yes') {
      boolValue = true;
    } else {
      boolValue = false;
    }
    return boolValue;
  }

  constructor(private httpClient: HttpClient) { }
}
