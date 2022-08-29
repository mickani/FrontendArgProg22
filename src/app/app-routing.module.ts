import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CrearComponent } from './componentes/CRUD-Educacion/crear/crear.component';
import { EditarComponent } from './componentes/CRUD-Educacion/editar/editar.component';
import { CrearELComponent } from './componentes/CRUD-ExpLaboral/crear-el/crear-el.component';
import { EditarELComponent } from './componentes/CRUD-ExpLaboral/editar-el/editar-el.component';
import { CrearHsComponent } from './componentes/CRUD-Skill/crear-hs/crear-hs.component';
import { EditarHsComponent } from './componentes/CRUD-Skill/editar-hs/editar-hs.component';
import { CrearSsComponent } from './componentes/CRUD-Skill/crear-ss/crear-ss.component';
import { EditarSsComponent } from './componentes/CRUD-Skill/editar-ss/editar-ss.component';
import { CrearProyComponent } from './componentes/CRUD-Proyecto/crear-proy/crear-proy.component';
import { EditarProyComponent } from './componentes/CRUD-Proyecto/editar-proy/editar-proy.component';
import { EditarPersonaComponent } from './componentes/acerca-de-mi/CRUD-AcercaDeMi/editar-persona/editar-persona.component';
import { EditarDescripComponent } from './componentes/acerca-de-mi/CRUD-Descripc/editar-descrip/editar-descrip.component';
import { EditarBannerComponent } from './componentes/CRUD-Banner/editar-banner/editar-banner.component';
import { PagInexistenteComponent } from './componentes/pag-inexistente/pag-inexistente.component';
import { LoginComponent } from './componentes/login/login.component';
import { IndexComponent } from './index/index.component';
import { ProdGuardService as guard } from './guards/prod-guard.service';

const routes: Routes = [

  //INDEX
  { path: 'index', component: IndexComponent },
  //HOME
  { path: 'home', component: HomeComponent, canActivate: [guard], data: {expectedRol: ['admin', 'user']} },
  //LOGIN
  {path: 'login', component: LoginComponent},
  // BANNER
  { path: 'editarBanner/:id', component: EditarBannerComponent, canActivate: [guard], data: {expectedRol: ['admin']} },
  // PERSONA
  { path: 'editarFoto/:id', component: EditarPersonaComponent, canActivate: [guard], data: {expectedRol: ['admin']} },
  // DESCRIPCIÓN PERSONA
  { path: 'editarDescripc/:id', component: EditarDescripComponent, canActivate: [guard], data: {expectedRol: ['admin']} },
  // EDUCACIÓN
  { path: 'crear', component: CrearComponent, canActivate: [guard], data: {expectedRol: ['admin']} },
  { path: 'editar/:id', component: EditarComponent, canActivate: [guard], data: {expectedRol: ['admin']} },
  // EXP. LABORAL
  { path: 'crearEL', component: CrearELComponent, canActivate: [guard], data: {expectedRol: ['admin']} },
  { path: 'editarEL/:id', component: EditarELComponent, canActivate: [guard], data: {expectedRol: ['admin']} },
  // HARD SKILL
  { path: 'crearHS', component: CrearHsComponent, canActivate: [guard], data: {expectedRol: ['admin']} },
  { path: 'editarHS/:id', component: EditarHsComponent, canActivate: [guard], data: {expectedRol: ['admin']} },
  // SOFT SKILL
  { path: 'crearSS', component: CrearSsComponent, canActivate: [guard], data: {expectedRol: ['admin']} },
  { path: 'editarSS/:id', component: EditarSsComponent, canActivate: [guard], data: {expectedRol: ['admin']} },
  // PROYECTO
  { path: 'crearProyecto', component: CrearProyComponent, canActivate: [guard], data: {expectedRol: ['admin']} },
  { path: 'editarProyecto/:id', component: EditarProyComponent, canActivate: [guard], data: {expectedRol: ['admin']} },
  // si la url está vacía, redirecciona a formulario. 
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  // si x error se pasa una ruta q no existe, redirecciona a pag inexistente. 
  { path: 'pagInexistente', component: PagInexistenteComponent },
  { path: '**', redirectTo: '/pagInexistente', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
