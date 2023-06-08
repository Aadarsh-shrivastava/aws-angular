import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.less']
})
export class ReviewComponent implements OnInit{
  stars:number[]=Array(Math.floor(Math.random()* (5) + 1)).fill(0);
  @Input() getReview: any;
  
  constructor(){
    
  }
  ngOnInit(): void {
    // console.log(this.getReview)
  }
  

}
