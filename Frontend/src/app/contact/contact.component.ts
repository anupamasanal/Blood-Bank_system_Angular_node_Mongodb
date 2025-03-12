import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent {
constructor(public serviceform:ContactService,public router:Router){

}
ngOnInit(){
this.reset()
}
reset(form?:NgForm){
  if(form){
    form.reset()
  }
  this.serviceform.selectedUser={
    name:" ",
    email:" ",
    message:" "
  }
}
onsubmitt(form:NgForm){
this.serviceform.postuser(form.value).subscribe((res)=>{
  this.router.navigateByUrl('/')
})
}
}

