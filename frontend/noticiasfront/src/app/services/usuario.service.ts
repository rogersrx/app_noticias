import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario, UsuarioLogin } from '../interfaces/usuario-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseurl:string="http://localhost:8080/auth/nuevo";
  private baseurllogin:string="http://localhost:8080/auth/login";

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }


  registrarUsuario(dato : Usuario) : Observable<any>{

    return this.http.post<any>(this.baseurl,dato,{headers:this.httpHeaders});

  }

  login(dato:UsuarioLogin) : Observable<any>{

    return this.http.post<any>(this.baseurllogin,dato,{headers:this.httpHeaders});

  }

  


}
