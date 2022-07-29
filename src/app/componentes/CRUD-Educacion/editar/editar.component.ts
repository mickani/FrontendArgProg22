import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  educacion = {
    nivelInstitucion: '',
    fecha: '',
    titulo: ''
  }

  id = null;

  constructor(private educacionService: EducacionService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.educacionService.traerPorId(this.id).subscribe(data => {
      console.log('SE MODIFICARÁ ID: ' + this.id)
    });
  }

  guardar() {
    this.educacionService.editarEducacion(this.id, this.educacion).subscribe(data => {
      console.log('SE MODIFICÓ ID: ' + this.id);
      this.router.navigate(['/home']);
    })
  }
}
