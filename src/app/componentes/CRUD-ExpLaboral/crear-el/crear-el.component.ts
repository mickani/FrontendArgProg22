import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpLaboral } from 'src/app/model/explaboral.model';
import { ExplaboralService } from 'src/app/servicios/explaboral.service';

@Component({
  selector: 'app-crear-el',
  templateUrl: './crear-el.component.html',
  styleUrls: ['./crear-el.component.css']
})
export class CrearELComponent implements OnInit {

  id? =null;
  empresa: String='';
  periodo: String='';
  descripcion: String='';

  constructor(private expLaboralService: ExplaboralService, private router: Router) { }

  ngOnInit(): void {
  }

  crearEL():void{
    const expLaboral=new ExpLaboral(this.empresa, this.periodo, this.descripcion);
    this.expLaboralService.crearExpLaboral(expLaboral).subscribe(data=>{
      console.log("Se creó una Exp. Laboral: "+data);
      this.router.navigate(['/home']);
    })
  }

}
