import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8085/api/product';
  constructor(private http: HttpClient) { }
  getProductById(product_id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${product_id}`);
  }
  getAllProduct(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
