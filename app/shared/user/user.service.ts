import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { User } from './user';
import { ApiConfig } from '../config/api-config';

@Injectable()
export class UserService {

  constructor(private http: Http) {}

  login(user: User) {
    let headers = new Headers();
    // headers.append('Accept', 'application/vnd.github.damage-preview');
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Basic " + window.btoa(user.account + ':' + user.password));

    return this.http.get(ApiConfig.apiUrl + "/user", {
      headers: headers
    })
    .map(res => res.json())
    .map(data => {
      return data;
    })
    .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    console.log('error');
    return Observable.throw(error);
  }
}
