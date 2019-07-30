import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  userForm: FormGroup;
  constructor(private userBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.userBuilder.group({
      name: [null,[Validators.required, Validators.minLength(3)]],
      username:[null,[Validators.required, Validators.minLength(3)]],
      email:[null,[Validators.required, Validators.email]]
    })
  }

}
