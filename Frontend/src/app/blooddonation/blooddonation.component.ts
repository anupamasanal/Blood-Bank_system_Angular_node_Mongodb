import { Component } from '@angular/core';
import { BlooddonationService } from '../blooddonation.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-blooddonation',
  templateUrl: './blooddonation.component.html',
  styleUrls: ['./blooddonation.component.css'],
  providers: [BlooddonationService]
})
export class BlooddonationComponent {
  constructor(public donation:BlooddonationService,public router:Router){

  }
  ngOnInit(){
    this.reset()
    }
    reset(form?:NgForm){
      if(form){
        form.reset()
      }
      this.donation.selectedUser={
        name:"",
        email:" ",
        gender:" ",
        phone_number:" ",
        age:" ",
        bloodgroup:" ",
        place:" ",
        disease:" "
      }
    }
    ondonatee(form:NgForm){
    this.donation.postuser(form.value).subscribe((res)=>{
      this.router.navigateByUrl('/')
    })
    }
}
