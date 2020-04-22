import { Component, OnInit } from '@angular/core';
import {NgModel} from '@angular/forms';
import {Tweet} from '../models/tweet.model';
@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
 
  listaTweets = [];
  nuevoTweet:Tweet;


  constructor() {
    this.nuevoTweet={
      id: null,
      texto: undefined,
      autor: undefined
    };
    let miTweet={
      id: 1,
      texto: "Creando nuestro primer tweet..emotional!",
      autor: "JaiVaneTiven"
    };
    this.listaTweets.push(miTweet);
   }
  
   ngOnInit(): void {
  }



   adicionarNuevoTweet(){
    if (this.nuevoTweet.texto && this.nuevoTweet.autor) {
      this.listaTweets.push({ ...this.nuevoTweet, id: this.listaTweets.length });
      this.nuevoTweet = {
        id: null,
        texto: undefined,
        autor: undefined
      }
    }
  }
 }

 

