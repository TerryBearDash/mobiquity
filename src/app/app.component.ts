import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading = true;
  ui_mode = true;

  setUIMode(ev: boolean) {
    this.ui_mode = ev;
  }
}
