import { UsuarioService } from './../usuario.service';
import { Injectable } from '@angular/core';
import { CanActivate, Resolve } from '@angular/router';
import { Usuario } from '../domains/usuario';
import { of } from 'rxjs';

// guarda de rota e separação de PUT e POST;
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements Resolve<Usuario> {
  constructor(private user:UsuarioService){}
  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): Usuario | import("rxjs").Observable<Usuario> | Promise<Usuario> {
  
    if(route.params && route.params['id']){
      return this.user.loadByID(route.params['id']);
    }
  return of({
    id: null,
    name: null, username: null, email: null
  });
}

}