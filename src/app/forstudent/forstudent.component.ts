import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../services/validate.service';
// import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-forstudent',
   templateUrl: './forstudent.component.html',
  styleUrls: ['./forstudent.component.css']
})
export class ForstudentComponent implements OnInit {
  name:String;
  mothername:String;
  fathername:String;
  email:String;
  phnumber:number;
  password:String;

  constructor(private validateService:ValidateService) { }

  ngOnInit() {
  }
  onRegisterSubmit(){
    const user ={
      name: this.name,
      mothername:this.mothername, 
      fathername:this.fathername,
      email:this.email,
      phnumber:this.phnumber,
      password:this.password
    }
if(!this.validateService.validateRegister(user)){
  console.log('please fill the all details');
  return false;
}
if(!this.validateService.validateEmail(user.email)){
  console.log('please use valid email');
  return false;

}
}
}