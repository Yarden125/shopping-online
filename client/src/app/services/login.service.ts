import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public constructor(
    private httpClient: HttpClient) { }

  // Login customer service:
  public loginCustomer(login: Login): Observable<any> {
    return this.httpClient.post<any>("/api/customers/login", login);
  }

  // Login admin service:
  public loginAdmin(login:Login):Observable<any>{
    return this.httpClient.post<any>("/api/admin/login", login);
  }
}
