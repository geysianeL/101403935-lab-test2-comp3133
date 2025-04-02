import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-mission-details',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatGridListModule, CommonModule],
  template: `
    <mat-card class="mat-elevation-z4">
      <div class="card-content">
        <img [src]="mission.links.mission_patch_small" alt="Mission Patch" class="mission-image" />
        <div class="text-content">
          <mat-card-header>
            <div class="content-container">
              <mat-card-title>{{ mission.mission_name }}</mat-card-title>
              <mat-card-subtitle>{{ mission.launch_year }}</mat-card-subtitle>
            </div>
          </mat-card-header>
          <mat-card-content>
            <p>{{ mission.details || 'No details available.' }}</p>
          </mat-card-content>
          <mat-card-actions>
            <a mat-button color="primary" *ngIf="mission.links.article_link" [href]="mission.links.article_link" target="_blank">
              <mat-icon>article</mat-icon> Article
            </a>
            <a mat-button color="accent" *ngIf="mission.links.wikipedia" [href]="mission.links.wikipedia" target="_blank">
              <mat-icon>wikipedia</mat-icon> Wikipedia
            </a>
            <a mat-button color="warn" *ngIf="mission.links.video_link" [href]="mission.links.video_link" target="_blank">
              <mat-icon>play_circle</mat-icon> Video
            </a>
          </mat-card-actions>
        </div>
      </div>
    </mat-card>
  `,
  styles: `
    .card-content {
      display: flex;
      align-items: center;
    }
    .mission-image {
      max-height: 10em;
      max-width: 10em;
      margin-right: 1em;
    }
    .text-content {
      flex: 1;
    }
  `
})
export class MissionListItemComponent {

  @Input()
  mission: Mission = {} as Mission;
}
