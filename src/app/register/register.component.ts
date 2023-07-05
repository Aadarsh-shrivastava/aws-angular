import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from '../services/user-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent {
  user={
    "firstName":'',
    "lastName":'',
    "username":'',
    "password":'',
    "userRole":'user',
  }
  message=''
  constructor(private router:Router,private service:UserApiService){
    
  }

  cancelRegistration(){
    
  }

  registerUser(){
    if(this.user.username!='' &&this.user.password!='')
    this.service.registerUser(this.user).subscribe((data:any)=>{if(data===null) this.message='already exist';else this.router.navigate(['../login']);},error=>{console.log(error);if(error.status==208){this.message='already exist'}});
    else this.message='Username and password cant be empty'
  }
  
}
