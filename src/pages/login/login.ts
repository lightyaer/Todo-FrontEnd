
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodoProvider } from './../../services/todos.service';
import { LoginProvider } from './../../services/login.service';

@Component({
    selector: 'loginPage',
    templateUrl: 'login.html'
})
export class LoginPage {
    user: any;
    token: Headers
    constructor(
        public navCtrl: NavController,
        private loginService: LoginProvider


    ) {

    }

    login() {
        this.user = {
            email: 'dhananjay@example.com',
            password: 'password123!'
        }

        this.loginService.login(this.user).then(user => {
            console.log(JSON.stringify(user, undefined, 2));
        })
    }


    logout() {

        this.loginService.logout().catch(e => {
            console.log(e);
        })
    }


}
