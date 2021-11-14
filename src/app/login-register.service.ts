import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {
  constructor(private httpclient:HttpClient) { }
  getData(){
    return({
      name:"Rajdip",
      age:30,
      id:1
    })
  }
  getAllData(): Observable<any>{
    let apiUrl ="http://localhost:8002/products/viewall"
    return this.httpclient.get(apiUrl);
  }
}
