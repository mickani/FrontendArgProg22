import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-info-acad',
  templateUrl: './info-acad.component.html',
  styleUrls: ['./info-acad.component.css']
})

export class InfoAcadComponent implements OnInit {

  educacion: Educacion | any = new Educacion(" ", " ", " ");

   //ACCESO PARA ELIMINAR
   roles!: string[];
   isAdmin = false;

  constructor(private educacionService: EducacionService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarEducacion();

    //ACCESO PARA ELIMINAR
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol=>{
      if(rol=== 'ROLE_ADMIN'){
        this.isAdmin=true;
      }
    });
  }

  cargarEducacion(): void {
    this.educacionService.getEducacion().subscribe(data => {
      this.educacion = data;
    })
  }

  borrar(id: number) {
    this.educacionService.eliminarEducacion(id).subscribe(data => {
      console.log("El ID: "+ id + ' fue eliminado');
      this.cargarEducacion();
    })
  }
}

