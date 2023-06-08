import { Component, OnInit } from '@angular/core';
import {myconstants } from '../gloabal_variables'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'product-community-site';
  
  user!: string | null;
  cards!:any;
 
  constructor() { }


  ngOnInit(): void {
    this.cards=myconstants.constant_products;
    console.log(this.user);
    this.user = localStorage.getItem("cur-user");
   
  }


  
}
