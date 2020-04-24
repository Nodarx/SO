import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Model/user';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent implements OnInit {
  @Input() user: User;
  private actualUser;
  constructor(public userService: UserService) { 
    this.actualUser = userService.getUserId();
  }

  ngOnInit(): void {
  }


}
