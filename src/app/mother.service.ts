import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  Mothers_Details,
  UniqueConstraintError,
} from './Details';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MotherService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  })

  
  private url = 'http://localhost:3300/';

  Insert(
    Details: Mothers_Details
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'Mothers_table/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(Id_No:String): Observable<Read> {
    return this.http.get<Read>(`${this.url}Mothers_table/Read${Id_No}`);
  }
  Delete(Id_No:String): Observable<InsertedSuccess> {
    console.log(`${this.url}Mothers_table/Delete${Id_No}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}Mothers_table/Delete${Id_No}`
    );
  }
  Update(Id_No:String, Details: Mothers_Details) {
    return this.http.put(`${this.url}Mothers_table/Update${Id_No}`, Details, {
      headers: this.headers,
    });
  }
  login(UserName: string, Password: string): Promise<any> {
    const credentials = { UserName, Password };
    return this.http.post<any>(`${this.url}Items_table/login`, credentials).toPromise();
  }
}