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
    nombre:["", [Validators.required, Validators.pattern(/^([A-Z]|[a-z])+$/)]],
    apellido:["", Validators.required],
    tipo_doc:["", Validators.required],
    numero_doc:["", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    email:["", [Validators.required, Validators.email] ],
    telefono:["", Validators.pattern(/^((15|11|5415|5411)?\d{8})$/)],
    edad:["", Validators.required],
    nombre_tutor:["", Validators.required],
    password:[]
  });

  submit(){
    const value = this.formCrearUsuario.valid;
    // this.formCrearUsuario.get('apellido')?.setValue("Gonza")

    console.log(value)
  };

  validarEdad(){
    if(this.formCrearUsuario.get('edad')?.value >18){
      this.formCrearUsuario.get('nombre_tutor')?.clearValidators();
      this.formCrearUsuario.get('nombre_tutor')?.updateValueAndValidity()
    }
    else{
      this.formCrearUsuario.get('nombre_tutor')?.setValidators(Validators.required);
      this.formCrearUsuario.get('nombre_tutor')?.updateValueAndValidity()
    }

  }

  ngOnInit(): void {
  }

}
