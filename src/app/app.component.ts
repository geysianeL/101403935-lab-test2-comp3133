import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule],
  template: `
    <h1 class="title">COMP 3133 | LABTEST 2 | SpaceX API</h1>
    <router-outlet />
  `,
  styles: [
    ` 
    .title {
      text-align: center;
      margin: 16px 0;
      font-size: 28px;
      font-weight: bold;
    }
    `
  ],
})
export class AppComponent {

}
