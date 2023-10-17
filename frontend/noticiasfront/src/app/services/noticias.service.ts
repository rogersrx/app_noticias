import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Noticia, NoticiaResponse } from '../interfaces/noticia-response';
import { LoginUsuario } from '../interfaces/login-response';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

 private baseUrl: string='https://api.spaceflightnewsapi.net/v4/articles/';
 private baseUrlApi: string ='http://localhost:8080/api/noticia';
 private offset: number=10;
 private limit: number=10;

 private datotoken: LoginUsuario= {token:'', bearer:'',nombreUsuario:'', authorities: []};

  constructor(private http: HttpClient) { }

  get params(){
    return {limit:this.limit.toString(),offset:this.offset.toString()  }
  }

  getNoticia(): Observable<NoticiaResponse>{
    return this.http.get<NoticiaResponse>(this.baseUrl);

  }  

 getNoticias(): Observable<NoticiaResponse>{
  return this.http.get<NoticiaResponse>(`${this.baseUrl}`,
  {params:this.params})
  .pipe(
    tap( () => {
      this.offset +=10;
    })
  );
 }

 getNoticiasBuscar(pagina:number): Observable<NoticiaResponse>{
  return this.http.get<NoticiaResponse>(`${this.baseUrl}`,
  {params:this.params})
  .pipe(
    tap( () => {
      this.offset=pagina;
    })
  );
 }

 buscarNoticias(texto : string):Observable<NoticiaResponse>{
  return this.http.get<NoticiaResponse>('https://api.spaceflightnewsapi.net/v4/articles/?search='+texto);
 }



 guardarfavorito(noticia:Noticia):Observable<any>{

    const dato=localStorage.getItem('dato');

    this.datotoken = dato !== null ?JSON.parse(dato): null;  
    noticia.usuario=this.datotoken['nombreUsuario'];
    

    const httpHeaders = new HttpHeaders({'Content-Type':'application/json','Authorization':'Bearer '+this.datotoken['token']});

    return this.http.post<any>(this.baseUrlApi,noticia,{headers:httpHeaders});

 }

 getNoticiafavorito():Observable<any>{

      const dato=localStorage.getItem('dato');
      this.datotoken = dato !== null ?JSON.parse(dato): null;  
      
      const httpHeaders = new HttpHeaders({'Content-Type':'application/json','Authorization':'Bearer '+this.datotoken['token']});

      return this.http.get<any>(this.baseUrlApi,{headers:httpHeaders});
 }

 deleteNoticiafavorite(id:number):Observable<any>{
    const dato=localStorage.getItem('dato');
    this.datotoken = dato !== null ?JSON.parse(dato): null;  
    
    const httpHeaders = new HttpHeaders({'Content-Type':'application/json','Authorization':'Bearer '+this.datotoken['token']});

    return this.http.delete<any>(this.baseUrlApi+"/"+id,{headers:httpHeaders});


 }


 


}
