import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public spinnerOptions;
  public spinnerOn = false;

  constructor() {
    this.spinnerOptions = {
      direction : -1
    };
  }

  changeDirection() {
    this.spinnerOptions.direction = -1 * this.spinnerOptions.direction;
  }
}
