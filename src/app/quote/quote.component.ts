import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote( 'Jackson brown', 'Rosie', 'success is getting what you want ,Happiness is liking what you get.'),
    new Quote('John washington', 'Rosie', 'You only live once,but if you do it right,once is enough')
  ];

  constructor() { }

  ngOnInit() {
  }

}
