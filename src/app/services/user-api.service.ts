import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const baseUrl="http://13.48.179.247:9193/users/"

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http:HttpClient) { }

  public getUser(){
    return this.http.get(baseUrl)
  }

  public registerUser(user:any){console.log("working function");
    return this.http.post(baseUrl,user)
  }

  public loginCheck(username:string,password:string){
    return null;
  }

  public getUsersCount(){
    return this.http.get('http://13.48.179.247:9193/users/getUsersCount')
  }

  
}
