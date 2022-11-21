import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Beneficiary } from './home';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly API: string = 'http://localhost:3002/beneficiary';

  data = new Subject<any>().asObservable();

  constructor(private http: HttpClient) {}

  getBeneficiaryById(id: string): Observable<Beneficiary> {
    const response = this.http.get<Beneficiary>(`${this.API}/${id}`);
    this.data = response;
    return response;
  }
}
