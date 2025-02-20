import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }


  register(data:any):Observable<any>{
    return this.httpClient.post(env['baseUrl'] + 'auth/singup', data);

  }
  login(data:any):Observable<any>{
    return this.httpClient.post(env['baseUrl'] + 'auth/signin', data);

  }
}
