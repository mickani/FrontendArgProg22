import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpLaboral } from 'src/app/model/explaboral.model';
import { ExplaboralService } from 'src/app/servicios/explaboral.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-exp-laboral',
  templateUrl: './exp-laboral.component.html',
  styleUrls: ['./exp-laboral.component.css']
})

export class ExpLaboralComponent implements OnInit {

  expLaboral: ExpLaboral | any = new ExpLaboral(" ", " ", " ");

  //ACCESO PARA ELIMINAR
  roles!: string[];
  isAdmin = false;

  constructor(private expLaboralService: ExplaboralService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.expLaboralService.getExpLaboral().subscribe(data => {
      console.log(data);
      this.expLaboral = data;
    });

    this.cargarExpLaboral();

    //ACCESO PARA ELIMINAR
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol=>{
      if(rol=== 'ROLE_ADMIN'){
        this.isAdmin=true;
      }
    });
  }

  cargarExpLaboral(): void {
    this.expLaboralService.getExpLaboral().subscribe(data => {
      this.expLaboral = data;
    })
  }

  borrarEL(id: number) {
    this.expLaboralService.eliminarExpLaboral(id).subscribe(data => {
      console.log("El ID: " + id + ' fue eliminado');
      this.cargarExpLaboral();
    })
  }

}
