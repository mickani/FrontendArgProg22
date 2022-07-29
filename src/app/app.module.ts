import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './componentes/header/header.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaDeMiComponent } from './componentes/acerca-de-mi/acerca-de-mi.component';
import { ExpLaboralComponent } from './componentes/exp-laboral/exp-laboral.component';
import { InfoAcadComponent } from './componentes/info-acad/info-acad.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { LoginComponent } from './componentes/login/login.component';
import { BtnEditarComponent } from './componentes/btn-editar/btn-editar.component';
import { BtnAgregarComponent } from './componentes/btn-agregar/btn-agregar.component';
import { BtnDeleteComponent } from './componentes/btn-delete/btn-delete.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { SkillsSoftComponent } from './componentes/skills-soft/skills-soft.component';
import { FormsModule } from '@angular/forms';
import { CrearComponent } from './componentes/CRUD-Educacion/crear/crear.component';
import { EditarComponent } from './componentes/CRUD-Educacion/editar/editar.component';
import { EliminarComponent } from './componentes/CRUD-Educacion/eliminar/eliminar.component';
import { CrearELComponent } from './componentes/CRUD-ExpLaboral/crear-el/crear-el.component';
import { EditarELComponent } from './componentes/CRUD-ExpLaboral/editar-el/editar-el.component';
import { EliminarELComponent } from './componentes/CRUD-ExpLaboral/eliminar-el/eliminar-el.component';
import { CrearHsComponent } from './componentes/CRUD-Skill/crear-hs/crear-hs.component';
import { EditarHsComponent } from './componentes/CRUD-Skill/editar-hs/editar-hs.component';
import { EliminarHsComponent } from './componentes/CRUD-Skill/eliminar-hs/eliminar-hs.component';
import { CrearSsComponent } from './componentes/CRUD-Skill/crear-ss/crear-ss.component';
import { EditarSsComponent } from './componentes/CRUD-Skill/editar-ss/editar-ss.component';
import { EliminarSsComponent } from './componentes/CRUD-Skill/eliminar-ss/eliminar-ss.component';
import { CrearProyComponent } from './componentes/CRUD-Proyecto/crear-proy/crear-proy.component';
import { EditarProyComponent } from './componentes/CRUD-Proyecto/editar-proy/editar-proy.component';
import { EliminarProyComponent } from './componentes/CRUD-Proyecto/eliminar-proy/eliminar-proy.component';
import { EditarPersonaComponent } from './componentes/acerca-de-mi/CRUD-AcercaDeMi/editar-persona/editar-persona.component';
import { EditarDescripComponent } from './componentes/acerca-de-mi/CRUD-Descripc/editar-descrip/editar-descrip.component';
import { EditarBannerComponent } from './componentes/CRUD-Banner/editar-banner/editar-banner.component';
import { PagInexistenteComponent } from './componentes/pag-inexistente/pag-inexistente.component';
import { RegistroComponent } from './auth/registro.component';
import { IndexComponent } from './index/index.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    BannerComponent,
    AcercaDeMiComponent,
    ExpLaboralComponent,
    InfoAcadComponent,
    SkillsComponent,
    ProyectosComponent,
    LoginComponent,
    BtnEditarComponent,
    BtnAgregarComponent,
    BtnDeleteComponent,
    HomeComponent,
    SkillsSoftComponent,
    CrearComponent,
    EditarComponent,
    EliminarComponent,
    CrearELComponent,
    EditarELComponent,
    EliminarELComponent,
    CrearHsComponent,
    EditarHsComponent,
    EliminarHsComponent,
    CrearSsComponent,
    EditarSsComponent,
    EliminarSsComponent,
    CrearProyComponent,
    EditarProyComponent,
    EliminarProyComponent,
    EditarPersonaComponent,
    EditarDescripComponent,
    EditarBannerComponent,
    PagInexistenteComponent,
    RegistroComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    RouterModule,
    FormsModule,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
