import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  userForm: FormGroup;
  constructor(private userBuilder: FormBuilder, private user: UsuarioService, private route: ActivatedRoute) { }

  ngOnInit() {
    // captura de dados do usuario para usar no route com o snapshot
    const usuario = this.route.snapshot.data['usuario']
    // criação do form com formBuilder
    this.userForm = this.userBuilder.group({
      id: [usuario.id],
      name: [usuario.name, [Validators.required, Validators.minLength(3)]],
      username: [usuario.username, [Validators.required, Validators.minLength(3)]],
      email: [usuario.email, [Validators.required, Validators.email]]
    })
  }
  //metodo de submissão dos valores do usuario
  onSubmit() {
    if (this.userForm.value.id) {
      //update do usuario
      alert("usuario alterado com sucesso");
      this.user.update(this.userForm.value).subscribe();
      
    } else {
      //criação do usuario
      alert("usuario criado com sucesso");

      this.user.create(this.userForm.value).subscribe();
    }
  }

}
