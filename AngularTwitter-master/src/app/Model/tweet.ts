import { User } from './user';

export type Tweets = Tweet[];

export class NewTweet {
  idTweet: Number;
  idUser: Number;
  text: String;
}

export class Tweet {
  idTweet: Number;
  idUser: Number;
  text: String;
  createdAt: String;
  updatedAt: String;
  userIdUser: Number;
  user: User;
}
