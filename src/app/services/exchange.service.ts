import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(private http: HttpClient) { }

  getRate() {
    return this.http.get('https://exchangeratesapi.io/').toPromise()
  }


}
