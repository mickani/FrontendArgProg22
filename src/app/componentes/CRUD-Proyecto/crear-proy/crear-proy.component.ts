import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-crear-proy',
  templateUrl: './crear-proy.component.html',
  styleUrls: ['./crear-proy.component.css']
})
export class CrearProyComponent implements OnInit {

  id?=null;
  nombre: String='';
  fecha: number=0;
  imagen: String='';
  descripcion: String='';
  link: String='';

  constructor(private proyectoService: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  crearProyecto(): void {
    const proyecto = new Proyecto(this.nombre, this.fecha, this.imagen, this.descripcion, this.link);
    this.proyectoService.crearProyecto(proyecto).subscribe(data => {
      console.log("Se creó un Proyecto: " + data);
      this.router.navigate(['/home']);
    })
  }

}
