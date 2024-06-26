import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  Childrens_Details,
  UniqueConstraintError,
} from './Details';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ChildService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  })

  
  private url = 'http://localhost:3300/';

  Insert(
    Details: Childrens_Details
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'Childrens_table/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(Id_No:String): Observable<Read> {
    return this.http.get<Read>(`${this.url}Childrens_table/Read${Id_No}`);
  }
  Delete(Id_No:String): Observable<InsertedSuccess> {
    console.log(`${this.url}Childrens_table/Delete${Id_No}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}Childrens_table/Delete${Id_No}`
    );
  }
  Update(Id_No:String, Details: Childrens_Details) {
    return this.http.put(`${this.url}Childrens_table/Update${Id_No}`, Details, {
      headers: this.headers,
    });
  }
}