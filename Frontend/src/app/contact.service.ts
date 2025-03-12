import { Injectable } from '@angular/core';
import { Contact } from './contact.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  selectedUser:any=Contact
readonly url='http://localhost:3000/contact'
  constructor(public http:HttpClient) {

   }
   postuser(data:Contact){
    return this.http.post(this.url+`/post`,data)
   }
}

