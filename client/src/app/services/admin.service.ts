import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public constructor(private httpClient: HttpClient) { }

  // Get admin:
  public getAdmin():Observable<Admin>{
    return this.httpClient.get<Admin>("/api/admin")
  }
}
