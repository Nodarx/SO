import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, Users } from '../Model/user';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-mistweets',
  templateUrl: './mistweets.component.html',
  styleUrls: ['./mistweets.component.css'],
})
export class MistweetsComponent implements OnInit {
  public allUser$: Observable<Users>;

  constructor(private userService: UserService) {
    this.getAllUser();
  }

  ngOnInit(): void {}

  async getAllUser() {
    this.allUser$ = this.userService.getUsers();
  }
}
