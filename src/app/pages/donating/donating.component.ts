import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-donating',
  templateUrl: './donating.component.html',
  styleUrl: './donating.component.scss',

})
export class DonatingComponent implements OnInit {
  public counterValue: number = 2014964;
  public finalValue: number = 4029927;
  private interval: any;
  counter: number = 0;


  constructor() {
  }

  ngOnInit(): void {
    //this.startCounting();
    setTimeout(() => {
      this.startCounting();
    }, 100);
  }

  startCounting() {
    this.interval = setInterval(() => {
      if (this.counterValue < this.finalValue) {
        this.counterValue += Math.floor(Math.random() * 1000) + 1;
      } else {
        this.stopCounter();
      }
    }, 1);
  }
  stopCounter() {
    clearInterval(this.interval);
  }
  formatNumber(number: number): string {
    return number.toLocaleString();
  }

  increment() {
    this.counter++;
  }

  decrement() {
    if (this.counter > 0) {
      this.counter--;
    }
  }
}
