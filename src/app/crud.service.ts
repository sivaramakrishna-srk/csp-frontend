import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  Staff_Details,
  UniqueConstraintError,
} from './Details';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });

  private url = 'http://localhost:3300/';

  Insert(
    Details: Staff_Details
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'Staff_table/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(Id_No: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}Staff_table/Read${Id_No}`);
  }
  Delete(Id_No: String): Observable<InsertedSuccess> {
    console.log(`${this.url}Staff_table/Delete${Id_No}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}Staff_table/Delete${Id_No}`
    );
  }
  Update(Id_No: String, Details: Staff_Details) {
    return this.http.put(`${this.url}Staff_table/Update${Id_No}`, Details, {
      headers: this.headers,
    });
  }
  login(UserName: String): Observable<Read> {
    console.log(UserName);
    return this.http.get<Read>(`${this.url}Staff_table/Read${UserName}`);
  }
}
