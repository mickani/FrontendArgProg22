import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  banner: Persona = new Persona(" ", " ", " ", " ", " ", " ");

  //ACCESO PARA ELIMINAR
  roles!: string[];
  isAdmin = false;

  constructor(public personaService: PersonaService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=>{
      console.log(data);
      this.banner=data;
    });

    //ACCESO PARA ELIMINAR
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol=>{
      if(rol=== 'ROLE_ADMIN'){
        this.isAdmin=true;
      }
    });
  }

  cargarPersona(): void{
    this.personaService.getPersona().subscribe(data=>{
      this.banner=data;
    })
  }

}
