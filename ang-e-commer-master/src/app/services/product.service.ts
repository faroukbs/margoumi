import { FormGroup } from '@angular/forms';
import { Product } from './../common/product';
import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public baseUrl = 'http://localhost:8181/product';
  public dataForm!: FormGroup;

  constructor(private httpClient: HttpClient) {}

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl + '/products');
  }
  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseUrl}/find/` + id);
  }
  addProductt(formData: FormData): Observable<any> {
    return this.httpClient.post(this.baseUrl+"/addproduct", formData);
  }
  updateProduct(id : number, product:Product): Observable<Product> {
    return this.httpClient.put<Product>(this.baseUrl + '/update/' + id, product); 
  }
  deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(this.baseUrl + '/delete/' + id);
  }
  getImagesByProducts(id:number):Observable<any[]>{
    return this.httpClient.get<any[]>(this.baseUrl+"/images/"+id)
  }
  getProductByCategory(id:number):Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.baseUrl+"/catproducts/"+id)
  }

}
