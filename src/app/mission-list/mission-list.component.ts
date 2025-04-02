// Removed unused import
import { Component, OnInit } from '@angular/core';
import { SpaceApiService } from '../network/spaceapi.service';
import { Mission } from '../models/mission';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { MissionListItemComponent } from '../mission-details/mission-details.component';
import { MissionFilterComponent } from '../mission-filter/mission-filter.component';

@Component({
  selector: 'app-mission-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    CommonModule,
    MissionListItemComponent,
    MissionFilterComponent
  ],
  template: `
    <h1 class="title">SpaceX Mission Launch List</h1>
<app-mission-filter/>
    <div class="mission-grid" *ngIf="missions.length > 0; else loading">
    <div class="mission-card" *ngFor="let mission of missions">
      <app-mission-details [mission]="mission"/>
</div>
    </div>
    <ng-template #loading>
      <p class="loading-text">Loading...</p>
    </ng-template>
  `,
  styles: [`
    .title {
      text-align: center;
      margin: 16px 0;
      font-size: 28px;
      font-weight: bold;
    }
    .mission-grid {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 16px;
    }
    .mission-card {
      width: 100%;
      max-width: 600px;
      margin-bottom: 16px;
    }
    
    .loading-text {
      text-align: center;
      font-size: 18px;
      margin-top: 20px;
    }
  `]
})
export class MissionListComponent implements OnInit {
  missions: Mission[] = [];

  constructor(private spaceApiService: SpaceApiService) { }

  ngOnInit(): void {
    this.spaceApiService.getMissions().subscribe((data: Mission[]) => {
      this.missions = data
    });
  }

  onYearChange(launch_year: number) {
    this.spaceApiService.getMissionsByYear(launch_year).subscribe((data: Mission[]) => {
      this.missions = data
    });
  }
}
