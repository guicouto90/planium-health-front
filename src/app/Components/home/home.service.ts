import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Beneficiary } from './home';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly API: string = 'http://localhost:3002/beneficiary';

  data = new Subject<any>().asObservable();

  constructor(private http: HttpClient) {}

  getBeneficiaryById(id: string): Observable<Beneficiary | string> {
    try {
      this.data = this.http.get<Beneficiary>(`${this.API}/${id}`);
    } catch (error) {
      console.log('TA AQUI?');
      alert(error);
    }
    return this.data;
  }

  async getBeneficiaryId(id: string): Promise<any> {
    try {
      const { data } = await axios.get(`${this.API}/${id}`);
      this.data = data;
      console.log(data);
    } catch (error) {
      alert(error);
    }
  }
}
