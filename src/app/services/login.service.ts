import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://13.48.179.247:9193"

  constructor(private http:HttpClient) { }

  generateToken(credentials:any){
    console.log(`${this.url}/token`);
    return this.http.post(`${this.url}/token`,credentials)
  }

  loginUser(token:any,credentials:any){
    localStorage.setItem("token",token);
    
    let curuser:any
    this.http.post("http://13.48.179.247:9193/users/findByUsernameAndPassword",credentials).subscribe((data:any)=>{localStorage.setItem("CurrentUser",data.username);localStorage.setItem("CurrentUserRole",data.userRole);console.log(data)})
    
    if(curuser!=null)
    
    console.log("saved i local",)

    
    return true
  }

  setUserData(){
    
  }
  isAdmin(){
    if(this.isLoggedIn()){
      return localStorage.getItem("CurrentUserRole")=='admin'?true:false;
    }
    return false
  }

  isLoggedIn(){
    let token=localStorage.getItem("token");
    if(token=="null"||token==''||token==undefined){
      return false;
    }return true;
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("CurrentUser");
    localStorage.removeItem("CurrentUserRole");
    return true;
  }

  getToken(){
    return localStorage.getItem("token")
   
  }

}
