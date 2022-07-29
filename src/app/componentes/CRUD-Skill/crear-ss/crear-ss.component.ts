import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoftSkill } from 'src/app/model/softSkill.model';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-crear-ss',
  templateUrl: './crear-ss.component.html',
  styleUrls: ['./crear-ss.component.css']
})
export class CrearSsComponent implements OnInit {

  id?=null;
  tipo: String='Soft';
  nombre: String='';
  porcentaje: number= 0;

  constructor(private softSikllService: SkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  crearSS():void{
    const softSkill= new SoftSkill(this.tipo, this.nombre, this.porcentaje);
    this.softSikllService.crearHardSkill(softSkill).subscribe(data =>{
      console.log("Se creó una Soft Skill: "+data);
      this.router.navigate(['/home']);
    })
  }

}
