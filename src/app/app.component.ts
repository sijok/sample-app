import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample-app';
  str = 'lp';

  constructor() {
    if (this.str == 'lp') {
      this.str = 'pg';
    }
  }
}
