
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
    constructor(public http: HttpClient, public headers: HttpHeaders) {
    }

    getAllTodos() {

        return this.http.get(this.baseUrl + 'todos', this.httpOptions)
    }

    getTodoByID(TodoID) {
        return this.http.get(this.baseUrl + 'todos/' + TodoID, this.httpOptions)
    }

    createTodo(todo) {
        return this.http.post(this.baseUrl + 'todos', JSON.stringify(todo), this.httpOptions)
    }

    deleteTodoByID(TodoID) {
        return this.http.delete(this.baseUrl + 'todos/' + TodoID, this.httpOptions)
    }

    updateTodoByID(TodoID, newTodo) {
        return this.http.patch(this.baseUrl + 'todos/' + TodoID, JSON.stringify(newTodo), this.httpOptions)
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





















