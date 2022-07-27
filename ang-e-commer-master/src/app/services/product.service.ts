import { Product } from './../common/product';
import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:8181/product';

  constructor(private httpClient: HttpClient) {}

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl + '/products');
  }
  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseUrl}/find/` + id);
  }
  addProduct(product: Product): Observable<any> {
    return this.httpClient.post(this.baseUrl + '/addproduct', product);
  }
  updateProduct(id : number, product:Product): Observable<Product> {
    return this.httpClient.put<Product>(this.baseUrl + '/update/' + id, product); 
  }
  deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(this.baseUrl + '/delete/' + id);
  }

}
