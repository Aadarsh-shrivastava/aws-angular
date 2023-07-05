import { Component } from '@angular/core';
import { ProductApiService } from '../services/product-api.service';
import { ReviewApiService } from '../services/review-api.service';
import { UserApiService } from '../services/user-api.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.less']
})
export class StatsComponent {
  products:any
  users:any
  reviews:any
  constructor(private productService:ProductApiService,private reviewService:ReviewApiService,private userService:UserApiService){
    productService.getProductsCount().subscribe(data=>{this.products=data;console.log('total number of cards'+data)})
    reviewService.getReviewsCount().subscribe(data=>{this.reviews=data;console.log('total number of cards'+data)})
    userService.getUsersCount().subscribe(data=>{this.users=data;console.log('total number of cards'+data)})
  }
}
