import {Component} from '@angular/core';
import {Subscription} from 'rxjs';
import {timer} from 'rxjs';

@Component({
  selector: 'app-timer',
  template: `
  <ng-container [ngSwitch]="true">
    <h1 *ngSwitchCase="!time">00:00:00</h1>
  <h1 *ngSwitchDefault>{{time | timer}}</h1>
  </ng-container>
  <button type="button"(click)="StartTimer()">Start</button>
  <button type="button"(click)="WaytTimer()">Wayt</button>
  <button type="button"(click)="ResetTimer()">Reset</button>`,
  styleUrls: ['./timer.component.css']
})

export class TimerComponent {

  constructor() {}
  //this subscription contain all subscribes
  subscription: Subscription
  //curent time value
  time: number
  timer = timer(0, 1000)


  StartTimer() {
    if (!this.subscription) {
      this.subscription = this.timer.subscribe(n => {
        this.time = n;
      });
    } else {
      return
    }
  }

  WaytTimer() {
    if (this.subscription.closed) {
      this.subscription = this.timer.subscribe(n => {
        this.time++;
      });
    } else {
      this.subscription.unsubscribe()
    }
  }

  ResetTimer() {
    this.subscription.unsubscribe()
    this.subscription = this.timer.subscribe(n => {
      this.time = n;
    })
  }

}
