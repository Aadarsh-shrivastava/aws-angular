import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  credentials = {
    "username": '',
    "password": ''
  }
  message=''
  constructor(private service: LoginService,private router:Router) { }

  onSubmit() {
    if ((this.credentials.username != '' && this.credentials.password != '') && (this.credentials.username != null && this.credentials.password != null)) {
      console.log("submit for to server", this.credentials)
      this.service.generateToken(this.credentials).subscribe((response:any) => { 
        console.log(response)
        this.service.loginUser(response.token,this.credentials);
        console.log("logged in successfully")
        this.router.navigate(['../']);
        window.location.href='../';
      }, error => { console.log("error ====",error);if(error.status===500){console.log('bad credentials');this.message='Couldnt loging!!! Invalid details'} })
      
    } else {
      this.message='fields can,t be empty'
      console.log("fields are empty")
    }
  }
}
