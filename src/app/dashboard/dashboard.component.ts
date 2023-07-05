import { Component, OnInit } from '@angular/core';
import { ReviewApiService } from '../services/review-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit{
  onProductPage:boolean=true;
  onReviewPage:boolean=false;

  toadd=false;

  
  allReviews:any;
  constructor(private service:ReviewApiService){
    service.getReviews().subscribe(data=>this.allReviews=data);
  }
  ngOnInit(): void {
    this.service.getReviews().subscribe(data=>this.allReviews=data);
  
  }
  
  
  switch(){
    this.onProductPage=!this.onProductPage;
    this.onReviewPage=!this.onReviewPage;
  }

  switchform(){
    this.toadd=!this.toadd;
  }
 

  }
