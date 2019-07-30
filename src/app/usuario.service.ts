import { Usuario } from './domains/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly API = 'http://localhost:3000/user'
  constructor(private http: HttpClient) { }
  list(){
    return this.http.get<Usuario[]>(this.API).pipe(delay(1000));
  }
  create(user: Usuario){
    return this.http.post(this.API, user).pipe(take(1));
  }
  loadByID(id: number){
    return this.http.get<Usuario>(`${this.API}/${id}`).pipe(take(1));
  }
  erased(id: number){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
  update(user: Usuario){
    return this.http.put(`${this.API}/${user.id}`, user).pipe(take(1));
  }
}
