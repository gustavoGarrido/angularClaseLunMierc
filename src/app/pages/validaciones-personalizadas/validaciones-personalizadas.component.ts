import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';
import { MyValidations } from 'src/app/utils/myValidations';

@Component({
  selector: 'app-validaciones-personalizadas',
  templateUrl: './validaciones-personalizadas.component.html',
  styleUrls: ['./validaciones-personalizadas.component.css']
})
export class ValidacionesPersonalizadasComponent implements OnInit {

  constructor(public fb: FormBuilder) { }

  formValidaciones = this.fb.group({
    numero: ["", [MyValidations.numeroDivisible(3)]]
  })

  verResultado(){
    console.log(this.formValidaciones.get('numero')?.valid)
  }

  ngOnInit(): void {
   console.log(this.formValidaciones.valid)
  }

}
