import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    constructor(private http: HttpClient) { }

    login(name: string, password: string): void {
        console.log('Login Service');
    }

    register(user: User): Observable<User> {
        let registerUrl = "http://localhost:8080/register";
        let registerUser: User = {
            firstName: "XXXXX",
            lastName: "XXXXX",
            userName: "XXXXX",
            password: "XXXXX"
        }
        let httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
          };
        console.log('Register');
        return this.http.post<User>(registerUrl, registerUser, httpOptions);

    }
}
