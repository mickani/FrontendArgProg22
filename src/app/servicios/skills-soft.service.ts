import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill.model';
import { SoftSkill } from '../model/softSkill.model';

@Injectable({
  providedIn: 'root'
})

export class SkillsSoftService {
  url = 'https://backheroku22.herokuapp.com/api/';

  constructor(private http: HttpClient) { }

  public getSkillSoft(): Observable<Skill> {
    return this.http.get<Skill>(this.url + 'skill/query?tipo=soft');
  }

  public crearSoftSkill(softSkill: Skill): Observable<any>{
    return this.http.post<any>(this.url + 'skill/crear', softSkill);
  }

  public traerPorId(id:any): Observable<any>{
    return this.http.get<any>(this.url + `traerporid/${id}`)
  }

  public editarSoftSkill(id:any, softSkill: Skill): Observable<any>{
    return this.http.put<any>(this.url+`skill/editar/${id}`, softSkill);
  }

  public eliminarSoftSkill(id:number): Observable<any>{
    return this.http.delete<any>(this.url+ `skill/borrar/${id}`);
  }
}

