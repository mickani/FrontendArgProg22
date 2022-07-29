import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillsSoftService } from 'src/app/servicios/skills-soft.service';

@Component({
  selector: 'app-editar-ss',
  templateUrl: './editar-ss.component.html',
  styleUrls: ['./editar-ss.component.css']
})
export class EditarSsComponent implements OnInit {

  softSkill = {
    tipo: 'Soft',
    nombre: '',
    porcentaje: ''
  }

  id = null;

  constructor(private softSkillService: SkillsSoftService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.softSkillService.traerPorId(this.id).subscribe(data => {
      console.log('SE MODIFICARÁ ID: ' + this.id)
    });
  }

  guardar() {
    this.softSkillService.editarSoftSkill(this.id, this.softSkill).subscribe(data => {
      console.log('SE MODIFICÓ ID: ' + this.id);
      this.router.navigate(['/home']);
    })
  }

}
