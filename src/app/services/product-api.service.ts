import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const baseUrl = "http://13.48.179.247:9193/products/"


const headers= new HttpHeaders()
.set('content-type', 'application/json')
.set('Access-Control-Allow-Origin', '*')
.set('Authorization',`Bearer ${localStorage.getItem('token')}`);

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

 

  constructor(private http: HttpClient) { }
 
  // api to gel list of all the products
  public getProduct() {
    const token='Bearer '+localStorage.getItem('token');
    console.log(token)
    return this.http.get(baseUrl,{'headers':new HttpHeaders({'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    'Authorization':`Bearer ${token}`})})
  }
  
  // api to delete a product by id
  public deleteProduct(id: number) {
    return this.http.delete(baseUrl + id)
  }
  // api to add a product 
  public addProduct(data:any) {
    return this.http.post(baseUrl,data)
  }

  public getProductByID(id:number) {
    return this.http.get(`${baseUrl}${id}`)
  }

  public updateProduct(data:any) {
    return this.http.put(`${baseUrl}`,data)
  }


  public searchProductbyName(name:any) {
    console.log('looking for',`${baseUrl}nameLike/${name}`)
    return this.http.get(`${baseUrl}nameLike/${name}`)
  }
  public searchProductbyCode(code:any) {
    console.log('looking for',`${baseUrl}productCode/${code}`)
    return this.http.get(`${baseUrl}productCode/${code}`)
  }
  public searchProductbyBrand(brand:any) {
    console.log('looking for',`${baseUrl}brandName/${brand}`)
    return this.http.get(`${baseUrl}brandName/${brand}`)
  }
  public getProductsCount(){
    return this.http.get('http://13.48.179.247:9193/products/getProductsCount')
  }

  public getProductsReview(Id:any){
    return this.http.get(`http://13.48.179.247:9193/products/searchReviewByProductId/${Id}`)
  }

}
