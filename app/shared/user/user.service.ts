import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";

import { User } from './user';

export class UserService {

  constructor(private http: Http) {}

  login(user: User) {
    // TODO login check
  }
}
