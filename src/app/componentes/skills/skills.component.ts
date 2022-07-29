import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillsService } from 'src/app/servicios/skills.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {

  hardskills: any;

  //ACCESO PARA ELIMINAR
  roles!: string[];
  isAdmin = false;

  constructor(private skillService: SkillsService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.skillService.getSkill().subscribe(data => {
      console.log(data);
      this.hardskills = data;
    });
    this.cargarHardSkill();
  }

  cargarHardSkill(): void {
    this.skillService.getSkill().subscribe(data => {
      this.hardskills = data;
    });

    //ACCESO PARA ELIMINAR
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol=>{
      if(rol=== 'ROLE_ADMIN'){
        this.isAdmin=true;
      }
    });
  }

  borrarHS(id: number) {
    this.skillService.eliminarHardSkill(id).subscribe(data => {
      console.log("El ID: "+ id + ' fue eliminado');
      this.cargarHardSkill();
    })
  }
}
