import { CategoryProduct } from './../common/category-product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryProductService {

  private baseUrl = "http://localhost:8181/category/all"
  constructor(private httpClient:HttpClient) { }

getProductCategories():Observable<CategoryProduct[]>{
  return this.httpClient.get<CategoryProduct[]>(this.baseUrl)
}
}
