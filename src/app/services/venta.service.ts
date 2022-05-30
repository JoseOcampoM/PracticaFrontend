import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { VentaI } from '../models/venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  api_uri = 'http://localhost:3000';
  constructor(
    private http:HttpClient
  ) { }



  getAllVenta():Observable<{venta:VentaI[]}>{
    return this.http
      .get<{venta:VentaI[]}>(this.api_uri + '/venta')
  }


  create(data:any):Observable<VentaI>{
    return this.http.post<VentaI>(this.api_uri + '/createventa', data)
  }
}
