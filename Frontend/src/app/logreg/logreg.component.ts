import { Component } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-logreg',
  templateUrl: './logreg.component.html',
  styleUrls: ['./logreg.component.css']
})
export class LogregComponent {
uname:any;
pass:any;
sub(data:any){
  this.uname=data.username;
  this.pass=data.password;
}
}
