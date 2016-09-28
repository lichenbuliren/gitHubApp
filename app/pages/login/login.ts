import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User, UserService } from '../../shared/user/';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html',
  providers: [UserService]
})
export class LoginPage {
  @Input()
  user: User = new User();

  constructor(private navCtrl: NavController,
    private userService: UserService) {

  }

  login() {
    this.userService.login(this.user).subscribe((data) => {
      console.log(data);
    },(error) => {
      console.log(error);
    });
  }
}
