import { Component, OnInit } from '@angular/core';
import {myconstants } from '../gloabal_variables'
import { Route, Router } from '@angular/router';
import { ProductApiService } from './services/product-api.service';
import { LoginService } from './services/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'product-community-site';
  products!:any;
  user!: string | null;
  cards!:any;
  selectedCard:any=null;
  isLoggedIn!:boolean;
  toAdd:boolean=false
  isAdmin=localStorage.getItem("CurrentUserRole")=='admin'?true:false;
  constructor(private router:Router,private service:ProductApiService,private loginservice:LoginService) { 
    this.isLoggedIn=loginservice.isLoggedIn()
    // this.isAdmin=localStorage.getItem("CurrentUserRole")=='admin'?true:false;
  }
  

  async ngOnInit(): Promise<void> {
    this.cards=myconstants.constant_products;
    console.log(this.user);
    this.user = localStorage.getItem("CurrentUser");
  }

  toggleToAdd(){
    this.toAdd=!this.toAdd
    console.log(this.toAdd)
  }

  toggleProduct(card:any){
    this.selectedCard=card;
  }

  goToDashboard(){
    this.router.navigate(['dashboard'],{skipLocationChange:false})
  }

  logout(){
    this.loginservice.logout()
    this.isLoggedIn=this.loginservice.isLoggedIn()
    this.router.navigate(['../../login'])
}
}