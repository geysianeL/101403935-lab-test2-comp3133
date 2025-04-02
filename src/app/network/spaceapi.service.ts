import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from '../models/mission';

@Injectable({
  providedIn: 'root'
})
export class SpaceApiService {

  constructor(private http: HttpClient) { }

  getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>('https://api.spacexdata.com/v3/launches');
  }

  getMissionDetail(mission_id: number): Observable<Mission> {
    return this.http.get<Mission>(`https://api.spacexdata.com/v3/launches/${mission_id}`);
  }

  getMissionsByYear(launch_year: number): Observable<Mission[]> {
    return this.http.get<Mission[]>(`https://api.spacexdata.com/v3/launches?launch_year=${launch_year}`);
  }
}
