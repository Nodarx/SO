import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { NavPageService } from '../Services/nav-page.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private usrService: UserService,
    private router: Router,
    private currentUser: User,
    public tools: NavPageService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      Email: ['', [Validators.required]],
      Password: ['', Validators.required],
    });
  }

  async loginValidate() {
    try {
      let formuser = this.loginForm.value;
      this.currentUser.username = formuser.Email;
      this.currentUser.password = formuser.Password;

      this.currentUser = <User>(
        await this.usrService.login(this.currentUser).toPromise()
      );
      this.usrService.setLoginInfo(this.currentUser);
      this.router.navigate(['/Home']);
    } catch {
      alert('Usuario y/o contraseña incorrectos');
    }
  }
}
