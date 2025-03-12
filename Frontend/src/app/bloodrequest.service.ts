import { Injectable } from '@angular/core';
import { Bloodrequest } from './bloodrequest.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BloodrequestService {
  selectedUser:any=Bloodrequest
  readonly url='http://localhost:3000/bloodrequest'

  constructor(public http:HttpClient) {

   }
   postuser(data:Bloodrequest){
    return this.http.post(this.url+`/given`,data)
   }
}
