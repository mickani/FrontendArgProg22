import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  id? =null;
  nivelInstitucion: String='';
  fecha: String='';
  titulo: String='';

  constructor(private educacionService: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  crear(): void{
    const educacion = new Educacion( this.nivelInstitucion, this.fecha, this.titulo);
    this.educacionService.crearEducacion(educacion).subscribe(data=>{
      this.router.navigate(['/home']);
    })
  }

}
