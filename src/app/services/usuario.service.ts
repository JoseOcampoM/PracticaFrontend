import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { UsuarioI } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  api_uri = 'http://localhost:3000';
  base_path = `${this.api_uri}/usuarios`

  constructor(
    private http:HttpClient
  ) { }

  getAllUsuario():Observable<{user:UsuarioI[]}>{
    return this.http
      .get<{user:UsuarioI[]}>(this.base_path)
  }
}
