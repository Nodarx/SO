import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../Model/user';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-change-info',
  templateUrl: './change-info.component.html',
  styleUrls: ['./change-info.component.css']
})
export class ChangeInfoComponent implements OnInit {
  public createChange: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private newUser: User
    
  ) {}
   ngOnInit(): void {
    this.createChange = this.formBuilder.group({
      Name: ['', [Validators.required, Validators.minLength(3)]],
      Password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  async updateInfo(){
    let infoForm = this.createChange.value;
    this.newUser.username= infoForm.Name;
    this.newUser.password=infoForm.Password;
    this.newUser.idUser = this.userService.getUserId();
    await this.userService.updateUser(this.newUser).toPromise();
    this.createChange.reset();
    alert('Cambios guardados');
  

  }

}
