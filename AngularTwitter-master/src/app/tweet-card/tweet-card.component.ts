import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { NewTweet, Tweet } from 'src/app/Model/tweet';

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.css'],
})
export class TweetCardComponent implements OnInit {
  @Input() tweet: Tweet;

  constructor() {
    console.log(this.tweet);
  }

  ngOnInit(): void {}
}
