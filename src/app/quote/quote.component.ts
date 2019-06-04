import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote( 1, 'Jackson brown', 'Rosie', 'success is getting what you want .', new Date(2019, 6, 3), ''),
    new Quote(2, 'John washington', 'Rosie', 'You only live once,but if you do it right,once is enough' , new Date(2019, 6, 2), ''  )

  ];
  toogleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  addNewQuote(quote) {
    const quoteLength  = this.quotes.length;
    quote .id = quoteLength + 1;
    this.quotes.push(quote);
  }
   deleteQuote(isCompelete, index)  {
    if (isCompelete) {
    const toDelete = confirm(`Are you sure you want to delete quote ${this.quotes[index].quote}`);
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

//   upvotes = 0;

//  upVote(i) {
//    this.quotes[i].uvotes += 1;
//  }
//  downvotes=0
//  downVote(i) {
//   this.quotes[i].dvotes += 1;
// }


  constructor() { }

  ngOnInit() {
  }

}
