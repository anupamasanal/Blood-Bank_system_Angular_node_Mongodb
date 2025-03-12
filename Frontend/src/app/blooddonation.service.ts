import { Injectable } from '@angular/core';
import { Blooddonation } from './blooddonation.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlooddonationService {
  selectedUser:any=Blooddonation
  readonly url='http://localhost:3000/blooddonation'
  constructor(public http:HttpClient) { 

  }
  postuser(data:Blooddonation){
    return this.http.post(this.url+`/donate`,data)
   }
}
