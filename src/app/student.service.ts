import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService  {
  private baseUrl = 'http://localhost:8085/api/student';

  constructor(private http: HttpClient) { }

  getStudent(student_id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${student_id}`);
  }
  getStudentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  updateStudent(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  createStudent(student: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, student);
  }
  deleteStudent(student_id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${student_id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`);
  }

}
