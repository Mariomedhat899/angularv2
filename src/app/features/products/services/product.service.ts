import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../../../environments/environments';




@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable <any>{
   return this.httpClient.get( environments.baseUrl +'products')
  }
  getProductDetails(id:string|null):Observable <any>{
    return this.httpClient.get(environments.baseUrl +`products/${id}`)
   }
}
