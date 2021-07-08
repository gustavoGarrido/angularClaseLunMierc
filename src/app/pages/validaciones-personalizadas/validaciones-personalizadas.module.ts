import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidacionesPersonalizadasRoutingModule } from './validaciones-personalizadas-routing.module';
import { ValidacionesPersonalizadasComponent } from './validaciones-personalizadas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ValidacionesPersonalizadasComponent
  ],
  imports: [
    CommonModule,
    ValidacionesPersonalizadasRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class ValidacionesPersonalizadasModule { }
