import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editar-banner',
  templateUrl: './editar-banner.component.html',
  styleUrls: ['./editar-banner.component.css']
})
export class EditarBannerComponent implements OnInit {

  banner: Persona = { nombre: '', apellido: '', titulo: '', descripcion: '', image_perfil: '', banner: '' };
  id = null;

  constructor(private personaService: PersonaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.personaService.traerPorId(this.id).subscribe(data => {
      this.banner = data;
      console.log('SE MODIFICARÁ ID: ' + this.id)
    });
  }

  guardar() {
    this.personaService.editarPersona(this.id, this.banner).subscribe(data => {
      console.log('SE MODIFICÓ ID: ' + this.id);
      this.router.navigate(['/home']);
    })
  }

}
