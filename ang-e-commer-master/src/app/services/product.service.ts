import { Product } from './../common/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8181/product"

  constructor(private httpClient: HttpClient) { }

  getProductList():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.baseUrl+"/products")
  }
  getProductById(id:number):Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseUrl}/find/`+id)
  }
}
