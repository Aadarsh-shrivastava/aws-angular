import { Component, Input, OnInit } from '@angular/core';
import {myconstants} from "../../gloabal_variables"
import { Router,ActivatedRoute } from '@angular/router';
import { ReviewApiService } from '../services/review-api.service';
import { ProductApiService } from '../services/product-api.service';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.less']
})
export class ProductPageComponent implements OnInit {
  // @Input() product: any;
  myReview={
    'review':'',
    'rating':'',
    'status':'pending',
    'userName':localStorage.getItem('CurrentUser'),
    // 'userName':localStorage.getItem('cur-user'),
    'product':{
      'productId':''
    }
  }
  id:any
  product:any
  reviews:any;
  rating:any;
  isAdmin=localStorage.getItem("CurrentUserRole")=='admin'?true:false;
  constructor(private router:Router,private Service:ProductApiService,private reviewService:ReviewApiService ,private route:ActivatedRoute){
      this.id=this.route.snapshot.paramMap.get('id')
      // console.log('current id',this.id)
      this.Service.getProductsReview(this.id).subscribe(data=>this.reviews=data)
      this.Service.getProductByID(this.id).subscribe(data=>this.product=data)
      this.reviewService.getAverageRating(this.id).subscribe(data=>this.rating=data)
  }
  ngOnInit(): void {
  }
 

  addReview(id:any){
    this.myReview.product=this.product
    this.myReview.rating=(<HTMLInputElement>document.getElementById("rating")).value
    this.myReview.product.productId=this.id
    // console.log(this.myReview)
    this.reviewService.addReviews(this.myReview).subscribe()
  }

  deleteReview(id:number){
    this.reviewService.deleteReview(id).subscribe(console.log);
    this.Service.getProductsReview(this.id).subscribe(data=>this.reviews=data)
    this.ngOnInit();
  }
  approveReview(id:number){
    this.reviewService.approveReviews(id).subscribe(console.log);
    this.Service.getProductsReview(this.id).subscribe(data=>this.reviews=data)
    this.ngOnInit();
  }

 
}
