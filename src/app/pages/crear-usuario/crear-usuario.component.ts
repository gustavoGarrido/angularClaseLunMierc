import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  constructor(public fb: FormBuilder) { }

  formCrearUsuario = this.fb.group({
    nombre:[],
    apellido:[],
    tipo_doc:[],
    numero_doc:[],
    email:[],
    telefono:[],
    edad:[],
    nombre_tutor:[],
    password:[]
  });

  submit(){
    const value = this.formCrearUsuario.valid;
    // this.formCrearUsuario.get('apellido')?.setValue("Gonza")

    console.log(value)
  }

  ngOnInit(): void {
  }

}
