import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TweetService } from '../Services/tweet.service';
import { NewTweet } from '../Model/tweet';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css'],
})
export class TweetComponent implements OnInit {
  public createTweetForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private tweetService: TweetService,
    private userService: UserService,
    private tweet: NewTweet
  ) {}

  ngOnInit(): void {
    this.createTweetForm = this.formBuilder.group({
      Description: ['', Validators.required],
    });
  }
  async PublicarTweet() {
    let tweetForm = this.createTweetForm.value;
    this.tweet.text = tweetForm.Description;
    this.tweet.idUser = this.userService.getUserId();
    await this.tweetService.PublicarTweet(this.tweet).toPromise();
    this.createTweetForm.reset();
    alert('Tweet registrado correctamente');
  }
}
