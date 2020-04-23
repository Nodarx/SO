import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tweets } from '../Model/tweet';

@Injectable({
  providedIn: 'root',
})
export class TweetService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:3000/tweet';
  private loginState = false;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
  }

  public PublicarTweet(tweet) {
    return this.http.post(this.accessPointUrl + '/createTweet', tweet, {
      headers: this.headers,
    });
  }

  public ObtenerTodosLosTweets(): Observable<Tweets> {
    return this.http.get<Tweets>(this.accessPointUrl + '/alltweets', {
      headers: this.headers,
    });
  }

  public ObtenerTweetsPorUsuario(): Observable<Tweets> {
    return this.http.get<Tweets>(this.accessPointUrl + '/alltweets', {
      headers: this.headers,
    });
  }
}
