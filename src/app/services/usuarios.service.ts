import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }

  rutaApi:string = "http://localhost:3000";

  login(loginData:{}):any{
    return this.http.post(`${this.rutaApi}/users/login`,loginData,{})
  }

  verificarToken(){
    return this.http.get(`${this.rutaApi}/users/`)
  }
}
