import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  @Output() mode = new EventEmitter();
  ui_mode = true;

  constructor() { }

  ngOnInit(): void {
  }

  setUIMode(ev: boolean) {
    this.mode.emit(ev);
  }

}
