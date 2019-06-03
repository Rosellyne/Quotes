import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote( 'Jackson brown', 'Rosie', 'success is getting what you want ,Happiness is liking what you get.', new Date(2019, 6, 3), '0' ),
    new Quote('John washington', 'Rosie', 'You only live once,but if you do it right,once is enough' , new Date(2019, 6, 2), '0')
  ];
  addNewQuote(quote) {
    const quoteLength  = this.quotes.length;
    quote .id = quoteLength + 1;
    this.quotes.push(quote);
  }
  deleteQuote(isCompelete, index)  {
    if (isCompelete) {
    const toDelete = confirm('Are you sure you want to delete quote ${this.quotes[index].name}');
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  count = 0;
  upVote() {this.count = this.count + 1;
  }
  sum=0;
  downVote() {this.sum = this.sum + 1;
  }


  constructor() { }

  ngOnInit() {
  }

}
