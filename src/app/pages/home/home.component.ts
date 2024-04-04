import {Component, OnInit} from '@angular/core';
import { IProductResponse } from "../../shared/interfaces/product/product.interface";
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '100%',
        opacity: 1,
        overflow: 'visible'
      })),
      state('closed', style({
        height: '0',
        opacity: 0,
        overflow: 'hidden'
      })),
      transition('open <=> closed', [
        animate('500ms ease-in-out')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  public productItems: Array<IProductResponse> = [];
  counter: number = 0;

  showAdditionalContent: boolean = false;

  toggleAdditionalContent(): void {
    this.showAdditionalContent = !this.showAdditionalContent;
  }
  constructor() { }

  ngOnInit(): void {
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
