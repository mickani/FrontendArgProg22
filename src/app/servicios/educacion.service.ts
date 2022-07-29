import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model'; 

@Injectable({
  providedIn: 'root'
})

export class EducacionService {
  url='https://murmuring-oasis-35626.herokuapp.com/api/education/';

  constructor(private http: HttpClient) { }

  public getEducacion(): Observable<Educacion>{
    return this.http.get<Educacion>(this.url + 'all');
  }

  public crearEducacion(educacion: Educacion): Observable<any>{
    return this.http.post<any>(this.url+'crear', educacion);
  }

  public traerPorId(id:any): Observable<any>{
    return this.http.get<any>(this.url + `traerporid/${id}`)
  }

  public editarEducacion(id:any, educacion: Educacion): Observable<any>{
    return this.http.put<any>(this.url+ `editar/${id}`, educacion);
  }

  public eliminarEducacion(id: number): Observable<any>{
    return this.http.delete<any>(this.url+ `borrar/${id}`);
  }
}
