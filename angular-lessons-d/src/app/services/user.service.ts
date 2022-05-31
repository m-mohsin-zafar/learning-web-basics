import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private rootUrl: string = 'http://localhost:3000/api/user';
  private config = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Accept', 'application/json')

  constructor(private _http: HttpClient) {
  }

  //for signup request
  registerUser(user: object) {
    console.log(JSON.stringify(user));
    return this._http.post<User>(this.rootUrl + '/signup', JSON.stringify(user), { headers: this.config });
  }

  //for login request
  authenticateUser(user: object) {
    return this._http.post(this.rootUrl + '/login', JSON.stringify(user), { headers: this.config });
  }
}
