
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginProvider {

    httpOptions = {
        headers: new HttpHeaders({
            'Content-type': 'application/json',
            'x-auth': localStorage.getItem('x-auth')
        })
    };
    baseUrl: 'localhost:3000/'
    constructor(public http: HttpClient) {
    }

    signup(user) {

        let signupOptions = {
            headers: new HttpHeaders({
                'Content-type': 'application/json'

            })
        };
        return this.http.post(this.baseUrl + 'users', JSON.stringify(user))

    }

    login(user) {

        let loginOptions = {
            headers: new HttpHeaders({
                'Content-type': 'application/json'

            })
        };
        return this.http.post(this.baseUrl + 'users/login', JSON.stringify(user))
    }

    logout() {
        return this.http.delete(this.baseUrl + 'users/me/token', this.httpOptions)
    }

    verify() {
        return this.http.get(this.baseUrl + 'users/me', this.httpOptions)
    }

}



    /*
    GET /todos => get all todos
    POST /todos => create todos
    GET /todos/id => get todo by ID
    DELETE /todos/id => delete todo by id
    PATCH /todos/id => update todos
    POST /users => signup
    GET users/me => get user by token
    POST /users/login => login
    DELETE /users/me/token =>  logout
    */
