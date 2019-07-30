import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'home',component:UsuarioListComponent},
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'novo-usuario',component:UsuarioFormComponent},
  {path:'editar/:id',component:UsuarioFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
