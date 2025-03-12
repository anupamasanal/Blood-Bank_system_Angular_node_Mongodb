import { Injectable } from '@angular/core';
import { Login } from './login.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
selectedUser:any=Login
readonly url='http://localhost:3000/patient'
  constructor(public http:HttpClient) {

   }
   postlogin(data:Login){
    return this.http.post(this.url+`/login`,data)
   }
   
}
