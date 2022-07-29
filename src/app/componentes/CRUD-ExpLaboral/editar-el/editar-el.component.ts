import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExplaboralService } from 'src/app/servicios/explaboral.service';

@Component({
  selector: 'app-editar-el',
  templateUrl: './editar-el.component.html',
  styleUrls: ['./editar-el.component.css']
})
export class EditarELComponent implements OnInit {

  expLaboral = {
    empresa: '',
    periodo: '',
    descripcion: ''
  }

  id = null;

  constructor(private expLaboralService: ExplaboralService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.expLaboralService.traerPorId(this.id).subscribe(data=>{
      console.log('SE MODIFICARÁ ID: ' + this.id)
    });
  }

  guardar() {
    this.expLaboralService.editarExpLaboral(this.id, this.expLaboral).subscribe(data => {
      console.log('SE MODIFICÓ ID: ' + this.id);
      this.router.navigate(['/home']);
    })
  }

}
