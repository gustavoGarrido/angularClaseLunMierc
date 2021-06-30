import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateUsuarioRoutingModule } from './update-usuario-routing.module';
import { UpdateUsuarioComponent } from './update-usuario.component';


@NgModule({
  declarations: [
    UpdateUsuarioComponent
  ],
  imports: [
    CommonModule,
    UpdateUsuarioRoutingModule
  ]
})
export class UpdateUsuarioModule { }
