import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public showNuevoTweet = false;
  public showInicio = true;
  public showPersonas = false;
  public showProfile = false; 
  public showChageInfo = false;

  public user;

  constructor(public userService: UserService, public router: Router) {
    this.user = userService.getUserName();
  }

  ngOnInit() {}

  public navigateComponent(componente) {
    this.showNuevoTweet = false;
    this.showInicio = false;
    this.showPersonas = false;
    this.showProfile=false;
    this.showChageInfo = false;

    switch (componente) {
      case 'NuevoTweet': {
        this.showNuevoTweet = true;
        break;
      }
      case 'Inicio': {
        this.showInicio = true;
        break;
      }
      case 'Personas': {
        this.showPersonas = true;
        break;
      }
      case 'Profile': {
        this.showProfile = true;
        break;
      }
      case 'ChageInfo': {
        this.showChageInfo = true;
        break;
      }
      
    }
  }
  public signOut() {
    //this.userService.logOut();
    this.router.navigate(['/login']);
  }
}
