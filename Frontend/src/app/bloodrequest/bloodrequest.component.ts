import { Component } from '@angular/core';
import { BloodrequestService } from '../bloodrequest.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bloodrequest',
  templateUrl: './bloodrequest.component.html',
  styleUrls: ['./bloodrequest.component.css'],
  providers: [BloodrequestService]
})
export class BloodrequestComponent {
  constructor(public request:BloodrequestService,public router:Router){

  }
  ngOnInit(){
    this.reset()
    }
    reset(form?:NgForm){
      if(form){
        form.reset()
      }
      this.request.selectedUser={
        name:"",
        email:"",
        gender:" ",
        phone_number:" ",
        age:" ",
        bloodgroup:" ",
        place:" ",
        disease:" "
      }
    }
    onrequestt(form:NgForm){
    this.request.postuser(form.value).subscribe((res)=>{
      this.router.navigateByUrl('/')
    })
    }
}
