import { Injectable } from '@angular/core';
import { Patient } from './patient.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PatientService {
  selectedUser:any=Patient
  readonly url='http://localhost:3000/patient'
  constructor(public http:HttpClient) {

   }
   postuser(data:Patient){
    return this.http.post(this.url+`/pat`,data)
   }
   postdonor(data1:Patient){
    return this.http.post(this.url+`/don`,data1)
   }
}
