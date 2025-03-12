import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  a:any
  constructor(public login:LoginService, public router:Router){}
   sub(form1:NgForm){
      this.login.postlogin(form1.value).subscribe((result)=>{
        if(result==1){
          this.router.navigateByUrl('/patient')
        }
        else if(result==2){
            this.router.navigateByUrl('/donor')
          }
          else{
            this.router.navigateByUrl('/donor')
            this.a='invalid'
          }
        

      })
    }
  

}
