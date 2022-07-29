import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillsSoftService } from 'src/app/servicios/skills-soft.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skills-soft',
  templateUrl: './skills-soft.component.html',
  styleUrls: ['./skills-soft.component.css']
})

export class SkillsSoftComponent implements OnInit {

  softskills:any;

   //ACCESO PARA ELIMINAR
   roles!: string[];
   isAdmin = false;

  constructor(private skillSoftService:SkillsSoftService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.skillSoftService.getSkillSoft().subscribe(data=>{
      console.log(data);
      this.softskills=data;
    });
    this.cargarSoftskill();

    //ACCESO PARA ELIMINAR
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol=>{
      if(rol=== 'ROLE_ADMIN'){
        this.isAdmin=true;
      }
    });
  }

  cargarSoftskill(): void {
    this.skillSoftService.getSkillSoft().subscribe(data => {
      this.softskills = data;
    })
  }

  borrarSS(id: number){
    this.skillSoftService.eliminarSoftSkill(id).subscribe(data => {
      console.log("El ID: "+ id + ' fue eliminado');
      this.cargarSoftskill();
    })  }

}
