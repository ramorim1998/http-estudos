import { Usuario } from './../domains/usuario';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  userForm: FormGroup;
  constructor(private userBuilder: FormBuilder, private user: UsuarioService, private route: ActivatedRoute) { }

  ngOnInit() {
    const usuario = this.route.snapshot.data['usuario']
    this.userForm = this.userBuilder.group({
      id: [usuario.id],
      name: [usuario.name, [Validators.required, Validators.minLength(3)]],
      username: [usuario.username, [Validators.required, Validators.minLength(3)]],
      email: [usuario.email, [Validators.required, Validators.email]]
    })
  }
  onSubmit() {
    if (this.userForm.value.id) {
      this.user.update(this.userForm.value).subscribe();
    } else {
      this.user.create(this.userForm.value).subscribe();
    }
  }

  onDelete(id: number) {
    this.user.erased(id);
  }

}
