import { CardState } from './card-state.enum';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

/**
 * Component that shows a message, a button and an optional timer
 */
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardState: CardState;
  @Input() titleText: string;
  @Input() countdownStartSeconds = 0;
  @Input() buttonText: string;
  @Input() buttonIcon: string;

  @Output() buttonClick: EventEmitter<any> = new EventEmitter();

  CardState = CardState;
  countdownVisible: boolean;
  countdownDate: any;
  countdownInterval: any;

  constructor() { }

  ngOnInit() {

    // this.startDate.milliseconds(0);

    if (this.countdownEnabled && this.countdownStartSeconds > 0) {
      this.startCountdown();
    }

  }

  @Input() set countdownEnabled(countdownEnabled) {
    this.countdownVisible = countdownEnabled;
    if (countdownEnabled && this.countdownStartSeconds > 0) {
      this.startCountdown();
    }
  }

  startCountdown() {

    this.countdownDate = moment();

    const min = this.countdownStartSeconds / 60;
    const sec = this.countdownStartSeconds % 60;
    this.countdownDate.minutes(min);
    this.countdownDate.seconds(sec);

    this.countdownInterval = setInterval(() => {

      const minutes = parseInt(this.countdownDate.format('mm'), 10);
      const seconds = parseInt(this.countdownDate.format('ss'), 10);


      if (minutes > 0 || minutes === 0  && seconds > 0) {
        this.countdownDate.subtract(1, 'seconds');
      }

      if (minutes <= 0 && seconds <= 0) {
        clearInterval(this.countdownInterval);
      }


    }, 1000);
  }


  click() {
    this.buttonClick.emit();
  }
}
