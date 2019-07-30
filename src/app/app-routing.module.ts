import { AuthGuardService } from './guards/auth-guard.service';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'home',component:UsuarioListComponent},
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'novo-usuario',component:UsuarioFormComponent, resolve: {usuario: AuthGuardService}},
  {path:'editar/:id',component:UsuarioFormComponent, resolve: {usuario: AuthGuardService}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
