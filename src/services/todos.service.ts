
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class TodoProvider {
    baseUrl: string;

    constructor(public http: HttpClient, public headers: HttpHeaders) {
        this.baseUrl = 'http://localhost:3000/'
    }

    getAllTodos() {
        return new Promise((resolve, reject) => {
            return this.http.get(this.baseUrl + 'todos', {
                headers: new HttpHeaders({
                    'Content-type': 'application/json',
                    'x-auth': localStorage.getItem('x-auth')
                })
            }).subscribe(res => {
                resolve(res)
            }, (error) => {
                reject(error)
            })
        })

    }

    getTodoByID(TodoID) {

        return new Promise((resolve, reject) => {
            return this.http.get(this.baseUrl + 'todos/' + TodoID, {
                headers: new HttpHeaders({
                    'Content-type': 'application/json',
                    'x-auth': localStorage.getItem('x-auth')
                })
            }).subscribe(res => {
                resolve(res)
            }, (error) => {
                reject(error)
            })
        })


    }

    createTodo(todo: Todo) {
        return new Promise((resolve, reject) => {
            return this.http.post(this.baseUrl + 'todos', JSON.stringify(todo), {
                headers: new HttpHeaders({
                    'Content-type': 'application/json',
                    'x-auth': localStorage.getItem('x-auth')
                })
            }).subscribe(res => {
                resolve(res)
            }, (error) => {
                reject(error)
            })
        })

    }

    deleteTodoByID(TodoID: string) {
        return new Promise((resolve, reject) => {
            return this.http.delete(this.baseUrl + 'todos/' + TodoID, {
                headers: new HttpHeaders({
                    'Content-type': 'application/json',
                    'x-auth': localStorage.getItem('x-auth')
                })
            }).subscribe(res => {
                resolve(res)
            }, (error) => {
                reject(error)
            })
        })

    }

    updateTodoByID(TodoID: string, newTodo: Todo) {

        return new Promise((resolve, reject) => {
            return this.http.patch(this.baseUrl + 'todos/' + TodoID, JSON.stringify(newTodo), {
                headers: new HttpHeaders({
                    'Content-type': 'application/json',
                    'x-auth': localStorage.getItem('x-auth')
                })
            }).subscribe(res => {
                resolve(res)
            }, (error) => {
                reject(error)
            })
        })


    }

}






















