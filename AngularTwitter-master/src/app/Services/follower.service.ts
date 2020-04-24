import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Model/user';

@Injectable({
    providedIn: 'root',
})

export class FollowerService {
    private headers: HttpHeaders;
    private accessPointUrl: string = 'http://localhost:3000/followers';

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8',
        });
    }

    public getFollowers(userId){
        return this.http.get<User>(this.accessPointUrl + '/followersbyuserid/'+ userId, {
            headers: this.headers,
        });
    }
}