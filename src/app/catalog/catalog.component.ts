import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductApiService } from '../services/product-api.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.less']
})
export class CatalogComponent implements OnInit {
  products: any;
  isEdit=null;
  constructor(private router: Router, private service: ProductApiService) { }

  ngOnInit(): void {
    // fetch('http://localhost:9193/products/').then((response)=>response.json).then(Response=>this.product=Response)
       this.service.getProduct().subscribe((data) => { this.products = data; });
    // console.log("prduct readasds from " + this.products)
  }
  deleteThisProduct(productId:any){
   
    this.service.deleteProduct(productId).subscribe();
    this.service.getProduct().subscribe((data) => {this.products = data;});
    this.ngOnInit();
    
  }
  modalClosed(){
    this.isEdit=null
  }
  switchIsEdit(productId:any){
    this.isEdit=productId
  }
}
