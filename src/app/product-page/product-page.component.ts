import { Component, Input, OnInit } from '@angular/core';
import {myconstants} from "../../gloabal_variables"
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.less']
})
export class ProductPageComponent implements OnInit {
  reviews= myconstants.constant_reviews;
  product:any;
  constructor(private router:Router){
    this.product=this.router.getCurrentNavigation()?.extras.state;
    console.log(this.router.getCurrentNavigation())
    console.log(this.product)
  }
  ngOnInit(): void {
    
    
    console.log()
  }
 
}
