import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http:HttpClient) { }

  async getBankData(city){ 
    let data = await (this.http.get(`https://vast-shore-74260.herokuapp.com/banks?city=${city}`).toPromise());
    return data;
  }
}
