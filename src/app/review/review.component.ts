import { Component, Input, OnInit } from '@angular/core';
import { ReviewApiService } from '../services/review-api.service';
import { ProductApiService } from '../services/product-api.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.less']
})
export class ReviewComponent implements OnInit{
  @Input() id:any
  // stars2:number[]=Array(Math.floor(Math.random()* (5) + 1)).fill(0);
  stars!:number[];
  isEdit=false;
  isAdmin=localStorage.getItem("CurrentUserRole")=='admin'?true:false;
  // @Input() reviews: any;
  @Input() reviews:any;
  constructor(private service:ReviewApiService,private productService:ProductApiService){
    
    if(this.id==null)
    service.getReviews().subscribe(data=>this.reviews=data);
    
  }
  ngOnInit(): void {
    
    this.stars=Array(this.reviews.rating).fill(0)
  }
  deleteReview(id:number){
    this.service.deleteReview(id).subscribe(console.log);
    this.service.getReviews().subscribe(data=>this.reviews=data);
    window.location.reload()
    this.ngOnInit();
  }
  approveReview(id:number){
    this.service.approveReviews(id).subscribe(console.log);
    this.service.getReviews().subscribe(data=>this.reviews=data);
    window.location.reload()
    this.ngOnInit();
  }

 
}
