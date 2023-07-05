import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule  } from '@angular/forms';
import { ProductApiService } from '../services/product-api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.less']
})
export class AddProductComponent {
  @Output() onClose: EventEmitter<boolean> = new EventEmitter();
  cur_product:any

  closeModal() {
      this.onClose.emit(true);
  }
  @Input() productId:any;
  addproductform=this.fb.group({
    productName:'',
    description:'',
    brand:'',
    code:'',
    image:'',
    price:'',
  })

  updateProductform=this.fb.group({
    productId:'',
    productName:'',
    description:'',
    brand:'',
    code:'',
    image:'',
    price:'',
  })


  constructor(private fb:FormBuilder,private service:ProductApiService){
    
  }

  updateProduct(){
    this.updateProductform.value.productId=this.productId
    this.service.updateProduct(this.updateProductform.value).subscribe(console.log,error=>console.log)
    window.location.reload()
    // console.log(this.updateProductform.value);
    this.onClose.emit(true);
  }

  addProduct(){
    // console.log(this.addproductform.value);
    this.service.addProduct(this.addproductform.value).subscribe(console.log)
    window.location.reload()
    this.onClose.emit(true);
  }
}
