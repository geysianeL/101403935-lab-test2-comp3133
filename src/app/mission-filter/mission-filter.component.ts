import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormField, MatFormFieldControl, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-mission-filter',
  imports: [MatFormField, MatIconModule, MatLabel, MatInputModule, FormsModule, MatGridListModule],
  template: `
    <div class="grid-container">
  <mat-grid-list cols="4" rowHeight="10em">
    <mat-grid-tile colspan="3">
      <mat-form-field appearance="outline" class="grid-item">
        <mat-label>Enter Year</mat-label>
        <input matInput type="number" [(ngModel)]="year" placeholder="e.g., 2023" />
      </mat-form-field>
    </mat-grid-tile>
    <mat-grid-tile>
      <button mat-icon-button aria-label="Search" (click)="onSearch()">
        <mat-icon>search</mat-icon>
      </button>
    </mat-grid-tile>
  </mat-grid-list>
</div>
  `,
  styles: [`
    mat-grid-list {
      align-items: center;
    }
    mat-form-field {
      width: 100%;
    }
  `]
})
export class MissionFilterComponent {
  year: string = '';

  @Output() yearChanged = new EventEmitter<string>();

  onSearch() {
    this.yearChanged.emit(this.year);
  }
}
