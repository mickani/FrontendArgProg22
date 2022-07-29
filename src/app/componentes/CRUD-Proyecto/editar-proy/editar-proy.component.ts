import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-editar-proy',
  templateUrl: './editar-proy.component.html',
  styleUrls: ['./editar-proy.component.css']
})
export class EditarProyComponent implements OnInit {

  proyecto = {
    nombre: '',
    fecha: null,
    imagen: '',
    descripcion:'',
    link:''
  }

  id = null;

  constructor(private proyectoService: ProyectoService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.proyectoService.traerPorId(this.id).subscribe(data => {
      console.log('SE MODIFICARÁ ID: ' + this.id)
    });
  }

  guardar() {
    this.proyectoService.editarProyecto(this.id, this.proyecto).subscribe(data => {
      console.log('SE MODIFICÓ ID: ' + this.id);
      this.router.navigate(['/home']);
    })
  }

}
