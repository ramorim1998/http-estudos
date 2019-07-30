import { Usuario } from './domains/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
// service com com o crud basico
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly API = 'http://localhost:3000/user'
  constructor(private http: HttpClient) { }
  // listagem de todos os usuarios
  list(){
    return this.http.get<Usuario[]>(this.API).pipe(delay(1000));
  }
  // criação de usuario
  create(user: Usuario){
    return this.http.post(this.API, user).pipe(take(1));
  }
  // getByID de usuario
  loadByID(id: number){
    return this.http.get<Usuario>(`${this.API}/${id}`).pipe(take(1));
  } 
  // delete de usuario
  eraser(id: number): Observable<any>{
    return this.http.delete(`${this.API}/${id}`).pipe(take(1)); 
  }
  // atualização de usuario
  update(user: Usuario){
    return this.http.put(`${this.API}/${user.id}`, user).pipe(take(1));
  }
}
