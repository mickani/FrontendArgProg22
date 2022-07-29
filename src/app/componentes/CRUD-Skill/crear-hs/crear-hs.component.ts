import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill.model';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-crear-hs',
  templateUrl: './crear-hs.component.html',
  styleUrls: ['./crear-hs.component.css']
})
export class CrearHsComponent implements OnInit {

  id?=null;
  tipo: String='Hard';
  nombre: String='';
  porcentaje: number= 0;

  constructor(private hardSikllService: SkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  crearHS():void{
    const hardSkill= new Skill(this.tipo, this.nombre, this.porcentaje);
    this.hardSikllService.crearHardSkill(hardSkill).subscribe(data =>{
      console.log("Se creó una Hard Skill: "+data);
      this.router.navigate(['/home']);
    })
  }

}
