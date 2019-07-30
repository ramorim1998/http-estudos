import { Usuario } from './domains/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly API = 'http://localhost:3000/user'
  constructor(private http: HttpClient) { }
  list(){
    return this.http.get<Usuario[]>(this.API).pipe(delay(1000));
  }
}
