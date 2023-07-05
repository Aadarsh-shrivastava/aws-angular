import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { myconstants } from 'src/gloabal_variables';
import { ProductApiService } from '../services/product-api.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  searchOptions = {
    "searchFor": '',
    "searchBy": '',
    "isValid": false
  }

  // user!: string | null;
  isLoggedIn: any;
  cards!: any;
  selectedCard: any = null;
  user = localStorage.getItem("CurrentUser");
  constructor(private router: Router, private service: ProductApiService, private loginservice: LoginService) {
    this.isLoggedIn = loginservice.isLoggedIn()
  }


  ngOnInit() {
    // this.cards=myconstants.constant_products;

    // (this.service.getProduct()).subscribe((data: any) => { this.cards = data });
    console.log("printing cards", this.cards);

  }
  toggleProduct(card: any) {
    this.selectedCard = card;
  }

  goToCatalog() {
    this.router.navigate(['catalog'], { skipLocationChange: false })
  }
  searchProducts() {
    this.cards = []
    const searchby = (<HTMLInputElement>document.getElementById("searchby")).value
    console.log(searchby)
    if(this.searchOptions.searchFor!='' && this.searchOptions.searchBy=='' )this.searchOptions.isValid=true
    console.log(this.searchOptions.isValid )
    if (this.searchOptions.isValid == true) {
      if (searchby == "name")
        this.service.searchProductbyName(this.searchOptions.searchFor).subscribe((data: any) => { this.cards = data })

      if (searchby == "code")
        this.service.searchProductbyCode(this.searchOptions.searchFor).subscribe(data => { this.cards = data; console.log(data) })

      else if (searchby == "brand")
        this.service.searchProductbyBrand(this.searchOptions.searchFor).subscribe((data: any) => { this.cards = data })
      else console.log("couldnt work sorry")
    }
  }




  redirectToProductDescriptionPage(card: any) {
    this.router.navigate(['product-page', card.productId])
  }
}


