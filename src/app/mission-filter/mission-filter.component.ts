import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mission-filter',
  imports: [MatFormField, MatLabel, CommonModule, BrowserModule, FormsModule],
  template: `
    <mat-form-field appearance="outline">
      <mat-label>Enter Year</mat-label>
      <input matInput type="number" [(ngModel)]="year" placeholder="e.g., 2023" />
    </mat-form-field>
    <button mat-raised-button color="primary" (click)="onSearch()">Search</button>
  `,
  styles: [`
    mat-form-field {
      width: 100%;
      margin: 10px 0;
    }
    button {
      margin-top: 10px;
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
