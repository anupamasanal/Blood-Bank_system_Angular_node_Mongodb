import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(public patientform:PatientService, public router:Router){

  }
  ngOnInit(){
    this.reset()
    }
    reset(form?:NgForm){
      if(form){
        form.reset()
      }
      // this.donorform.selectedUser={
      //   username:" ",
      //   password:" ",
      //   repeatpassword:" ",
      //   email:" "
      // }
      this.patientform.selectedUser={
        username:" ",
        password:" ",
        repeatpassword:" ",
        email:" "
      }
      
    }
    ondonor(form:NgForm){
    this.patientform.postdonor(form.value).subscribe((res)=>{
      this.router.navigateByUrl('/login')
    })
    }
    onpatient(form:NgForm){
      this.patientform.postuser(form.value).subscribe((res)=>{
        this.router.navigateByUrl('/login')
      })
    }
}
