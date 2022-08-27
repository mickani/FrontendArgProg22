import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpLaboral } from '../model/explaboral.model'; 

@Injectable({
  providedIn: 'root'
})

export class ExplaboralService {
  url='https://backheroku22.herokuapp.com/api/explaboral/';

  constructor(private http: HttpClient) { }

  public getExpLaboral(): Observable<ExpLaboral>{
    return this.http.get<ExpLaboral>(this.url + 'all');
  }

  public crearExpLaboral(expLab: ExpLaboral): Observable<any>{
    return this.http.post<any>(this.url+'crear', expLab);
  }

  public traerPorId(id:any): Observable<any>{
    return this.http.get<any>(this.url + `traerporid/${id}`);
  }

  public editarExpLaboral(id:any, expLab: ExpLaboral): Observable<any>{
    return this.http.put<any>(this.url+`editar/${id}`, expLab);
  } 

  public eliminarExpLaboral (id:number):Observable<any>{
    return this.http.delete<any>(this.url+`borrar/${id}`);
  }
}
