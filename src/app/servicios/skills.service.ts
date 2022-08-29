import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill.model';  

@Injectable({
  providedIn: 'root'
})

export class SkillsService {

  url='https://backheroku22.herokuapp.com/api/';
  // url='http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  public getSkill(): Observable<Skill>{
    return this.http.get<Skill>(this.url + 'skill/query?tipo=hard');
  }

  public crearHardSkill(hardSkill: Skill): Observable<any>{
    return this.http.post<any>(this.url + 'skill/crear', hardSkill);
  }

  public traerPorId(id:any): Observable<any>{
    return this.http.get<any>(this.url + `traerporid/${id}`)
  }

  public editarHardSkill(id:any, hardSkill: Skill): Observable<any>{
    return this.http.put<any>(this.url+`skill/editar/${id}`, hardSkill);
  }

  public eliminarHardSkill(id:number): Observable<any>{
    return this.http.delete<any>(this.url+ `skill/borrar/${id}`);
  }

}
