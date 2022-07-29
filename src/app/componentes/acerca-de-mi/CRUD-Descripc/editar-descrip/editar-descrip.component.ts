import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editar-descrip',
  templateUrl: './editar-descrip.component.html',
  styleUrls: ['./editar-descrip.component.css']
})
export class EditarDescripComponent implements OnInit {

  personaActual: Persona = { nombre: '', apellido: '', titulo: '', descripcion: '', image_perfil: '', banner: '' };
  id = null;

  constructor(private personaService: PersonaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.personaService.traerPorId(this.id).subscribe(data => {
      this.personaActual = data;
      console.log('SE MODIFICARÁ ID: ' + this.id)
    });
  }

  guardar() {
    this.personaService.editarPersona(this.id, this.personaActual).subscribe(data => {
      console.log('SE MODIFICÓ ID: ' + this.id);
      this.router.navigate(['/home']);
    })
  }

}
