
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';



@Injectable()
export class LoginProvider {

    localUrl: string;
    productionUrl: string;
    constructor(public http: HttpClient) {
        this.localUrl = 'http://localhost:3000/'
    }


    login(user) {
        return new Promise((resolve, reject) => {
            this.http.post(this.localUrl + 'users/login', JSON.stringify(user), {
                headers: new HttpHeaders()
                    .set('Content-type', 'application/json'),
                observe: 'response'
            })
                .subscribe((res) => {
                    localStorage.setItem('token', res.headers.get('x-auth'))
                    resolve(res);
                }, (err) => {
                    reject(err);
                })
        })

    }

    logout() {
        let httpOptions = {
            headers: new HttpHeaders({
                'Content-type': 'application/json',
                'x-auth': localStorage.getItem('token')
            })
        };

        return new Promise((resolve, reject) => {
            this.http.delete(this.localUrl + 'users/me/token', httpOptions).subscribe(res => {
                resolve();
            }, (error) => {
                reject(error)
            })
        })
    }

    signup(user) {
        return new Promise((resolve, reject) => {
            this.http.post(this.localUrl + 'users', JSON.stringify(user), {
                headers: new HttpHeaders()
                    .set('Content-type', 'application/json'),
                observe: 'response'
            })
                .subscribe((res) => {
                    localStorage.setItem('token', res.headers.get('x-auth'))
                    resolve(res);
                }, (err) => {
                    reject(err);
                })
        })
    }

    verify() {
        let httpOptions = {
            headers: new HttpHeaders({
                'Content-type': 'application/json',
                'x-auth': localStorage.getItem('token')
            })
        };

        return new Promise((resolve, reject) => {
            this.http.get(this.localUrl + 'users/me', httpOptions).subscribe(res => {
                resolve(res);
            }, (error) => {
                reject(error)
            })
        })
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
