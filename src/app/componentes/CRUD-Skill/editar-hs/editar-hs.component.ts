import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-editar-hs',
  templateUrl: './editar-hs.component.html',
  styleUrls: ['./editar-hs.component.css']
})
export class EditarHsComponent implements OnInit {

  hardSkill = {
    tipo: 'Hard',
    nombre: '',
    porcentaje: null
  }

  id = null;

  constructor(private hardSkillService: SkillsService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.hardSkillService.traerPorId(this.id).subscribe(data => {
      console.log('SE MODIFICARÁ ID: ' + this.id)
    });
  }

  guardar() {
    this.hardSkillService.editarHardSkill(this.id, this.hardSkill).subscribe(data => {
      console.log('SE MODIFICÓ ID: ' + this.id);
      this.router.navigate(['/home']);
    })
  }

}
