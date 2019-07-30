import { UsuarioService } from './../usuario.service';
import { Usuario } from './../domains/usuario';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  //usuarios: Usuario[];
  usuarios$: Observable<Usuario[]>;

  constructor(private user: UsuarioService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.usuarios$ = this.user.list();
    //this.user.list().subscribe(dados=>this.usuarios=dados);
  }
  onEdit(id: number){
    this.router.navigate(['/editar',id],{relativeTo: this.route});
  }
  onDelete(id:number){
    this.user.erased(id);
  }
}
