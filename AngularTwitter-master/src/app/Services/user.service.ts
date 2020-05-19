import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User,Users } from '../Model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:3000/users';
  /* static instance:UserRegisterService; */
  private loginState = false;

  constructor(private http: HttpClient, private currentUser: User) {
    /*  UserRegisterService.instance = this; */
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
  }

  public add(usuario) {
    return this.http.post(this.accessPointUrl + '/newuser', usuario, {
      headers: this.headers,
    });
  }

  public login(usuario) {
    return this.http.post(this.accessPointUrl + '/login', usuario, {
      headers: this.headers,
    });
  }

  public getUsers(): Observable<Users>{
    return this.http.get<Users>(this.accessPointUrl + '/', {
      headers: this.headers,
    });
  }

  public setLoginInfo(usr) {
    this.currentUser = usr;
    this.loginState = true;
  }

  public getUserName() {
    return this.currentUser.username;
  }

  public getUserId() {
    return this.currentUser.idUser;
  }
  public updateUser(user){
    this.currentUser=user;
    return this.http.post(this.accessPointUrl + '/updateUser', user, {
      headers: this.headers,
    });
  }
}
