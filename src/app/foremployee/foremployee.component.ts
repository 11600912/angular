import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../services/validate.service';
@Component({
  selector: 'app-foremployee',
  templateUrl: './foremployee.component.html',
  styleUrls: ['./foremployee.component.css']
})
export class ForemployeeComponent implements OnInit {
  name:String;
  mothername:String;
  fathername:String;
  email:String;
  exp:string;
  phnumber:number;
  password:String;

  constructor(private validateService:ValidateService) { }

  ngOnInit() {
  }
  onRegisterSubmit(){
    const user ={
      name:this.name,
      mothername:this.mothername, 
      fathername:this.fathername,
      email:this.email,
      exp:this.exp,
      phnumber:this.phnumber,
      

    }
    if(!this.validateService.validateRegister(user)){
      console.log('please fill the details');
      return false;
    }
    if(!this.validateService.validateEmail(user.email)){
      console.log('please use valid email');
      return false;

    }
  }
}
