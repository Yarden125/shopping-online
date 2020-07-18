import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public constructor(private httpClient: HttpClient) { }

  // Register customer:
  public registerCustomer(customer:Customer):Observable<any>{
    return this.httpClient.post<any>("http://localhost:3001/api/customers/register", customer);
  }
}
