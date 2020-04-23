import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweets } from '../Model/tweet';
import { TweetService } from '../Services/tweet.service';

@Component({
  selector: 'app-mistweets',
  templateUrl: './mistweets.component.html',
  styleUrls: ['./mistweets.component.css'],
})
export class MistweetsComponent implements OnInit {
  public allTweets$: Observable<Tweets>;

  constructor(private tweetService: TweetService) {
    this.getAllTweets();
  }

  ngOnInit(): void {}

  async getAllTweets() {
    this.allTweets$ = this.tweetService.ObtenerTodosLosTweets();
  }
}
