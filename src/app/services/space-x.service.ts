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
  constructor(private httpClient: HttpClient) { }
}
