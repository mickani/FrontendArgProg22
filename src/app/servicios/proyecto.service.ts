import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto.model'; 

@Injectable({
  providedIn: 'root'
})

export class ProyectoService {
  url='https://murmuring-oasis-35626.herokuapp.com/api/proyecto/';

  constructor(private http: HttpClient) { }

  public getProyecto(): Observable<Proyecto>{
    return this.http.get<Proyecto>(this.url + 'all');
  }

  public crearProyecto(proyecto: Proyecto): Observable<any>{
    return this.http.post<any>(this.url + 'crear', proyecto);
  }

  public traerPorId(id:any): Observable<any>{
    return this.http.get<any>(this.url + `traerporid/${id}`)
  }

  public editarProyecto(id:any, proyecto: Proyecto): Observable<any>{
    return this.http.put<any>(this.url+`editar/${id}`, proyecto);
  }

  public eliminarProyecto(id:number): Observable<any>{
    return this.http.delete<any>(this.url+ `borrar/${id}`);
  }
}
