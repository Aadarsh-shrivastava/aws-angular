import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const baseUrl = "http://13.48.179.247:9193/reviews/"

@Injectable({
  providedIn: 'root'
})
export class ReviewApiService {

  constructor(private http: HttpClient) { }
 
  // api to gel list of all the products
  public getReviews() {
    return this.http.get(baseUrl)
  }
  
  public addReviews(review:any) {
    return this.http.post(baseUrl,review)
  }
  // api to delete a product by id
  public deleteReview(id: number) {
    return this.http.delete(baseUrl + id)
  }
  public approveReviews(id:number) {
    return this.http.get(`${baseUrl}approveReview/${id}`)
  }

  public searchReviewByProductId(id:number){
    return this.http.get("http://13.48.179.247:9193/products/searchReviewByProductId/"+id)
  } 

  public getReviewsCount(){
    return this.http.get('http://13.48.179.247:9193/reviews/getReviewsCount')
  }
  public getAverageRating( Id:any){
    return this.http.get('http://13.48.179.247:9193/products/getAverageRating/'+Id)
  }

}
