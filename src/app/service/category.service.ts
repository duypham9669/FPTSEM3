import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'http://localhost:8085/api/category';
  private student = 'product';

  constructor(private http: HttpClient) { }
  getCategory(category_id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${category_id}`);
  }
  getCategoryList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getListProduct(category_id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${category_id}/${this.student}`);
  }
  updateCategory(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  createCategory(Category: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, Category);
  }
  deleteCategory(Category_id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${Category_id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`);
  }
}
