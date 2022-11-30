import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Beneficiary } from './home';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly API: string = 'http://localhost:3001';

  data = new Subject<any>().asObservable();

  constructor(private http: HttpClient) {}

  getBeneficiaryById(id: string): Observable<Beneficiary | string> {
    try {
      this.data = this.http.get<Beneficiary>(
        `${this.API}/user/beneficiary/${id}`
      );
    } catch (error) {
      alert(error);
    }
    return this.data;
  }

  async loginAccredited(
    identifier: string,
    password: string
  ): Promise<Token | void> {
    try {
      const response = (await axios.post(`${this.API}/auth/login/accredited`, {
        identifier,
        password,
      })) as Token;
      return response;
    } catch (error) {
      alert('Login ou senha inválidos');
    }
  }

  async registerAccredited(
    identifier: string,
    password: string
  ): Promise<void> {
    try {
      await axios.post(`${this.API}/user/accredited`, {
        identifier,
        password,
      });
    } catch (error) {
      throw new Error('Erro na requisição');
    }
  }
}

interface Token {
  data: {
    token: string;
  };
}
