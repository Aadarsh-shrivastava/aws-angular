import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less']
})
export class ProductCardComponent {
  @Input() product: any;

  showStepperComp: boolean = true;

  constructor(private router: Router) { }
  
  showHideStepperComp(value: boolean) {
    this.showStepperComp = value;
  }
  navigateToProductPage() { 
    // console.log(this.product.productName)
 
    this.router.navigate(['product-page'], {
      state: this.product
    });
  }
}
