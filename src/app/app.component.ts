import { Component, OnInit } from '@angular/core';
import { CardState } from './app/card/card-state.enum';
import { PrizeService } from './app/prize.service';

/**
 * Main component that prepares prize services and card component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  cardState: CardState;
  titleText: string;
  countdownEnabled: boolean;
  countdownStartSeconds: number;
  buttonText: string;
  buttonIcon: string;

  prizeObj: any = {
    'amount': 0,
    'prize': 'No Prize',
    'game': 'No Game',
    'countdown': 0
  };

  constructor(private prizeService: PrizeService) {
    this.callPrizeData();
  }

  ngOnInit() {

  }

  callPrizeData() {
    this.prizeService.getPrizeData().subscribe(res => {
      console.log('res');
      console.dir(res);
      this.prizeObj = res;
     this.updateOnStateChange(CardState.DEFAULT);
    },
    err => {
     this.updateOnStateChange(CardState.DEFAULT);
    });
  }

  onClick() {

    if (this.cardState === CardState.DEFAULT) {
      this.updateOnStateChange(CardState.TICKED);
    }

  }

  updateOnStateChange(cardState) {
    this.cardState = cardState;

    if (this.cardState === CardState.DEFAULT) {
      this.titleText =  this.prizeObj.amount + ' ' + this.prizeObj.prize + ' on ' + this.prizeObj.game;
      this.countdownEnabled = true;
      this.buttonText = 'Claim now';
    } else if (this.cardState === CardState.TICKED) {
      this.titleText =  'You\'ve ' + this.prizeObj.amount  + ' '  + this.prizeObj.prize + ' to use now';
      this.countdownEnabled = false;
      this.buttonText = '';
    }
  }
}
