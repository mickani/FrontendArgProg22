import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {

  proyectos: any;

  //ACCESO PARA ELIMINAR
  roles!: string[];
  isAdmin = false;

  constructor(private proyectoService: ProyectoService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.proyectoService.getProyecto().subscribe(data => {
      console.log(data);
      this.proyectos = data;
    });

    //ACCESO PARA ELIMINAR
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol=>{
      if(rol=== 'ROLE_ADMIN'){
        this.isAdmin=true;
      }
    });
  }

  borrarProyecto(id: number){
    this.proyectoService.eliminarProyecto(id).subscribe(data => {
      console.log("El ID: "+ id + ' fue eliminado');
      this.ngOnInit();
    })  }


}
