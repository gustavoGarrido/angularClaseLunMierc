import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaEnviaRoutingModule } from './pagina-envia-routing.module';
import { PaginaEnviaComponent } from './pagina-envia.component';


@NgModule({
  declarations: [
    PaginaEnviaComponent
  ],
  imports: [
    CommonModule,
    PaginaEnviaRoutingModule
  ]
})
export class PaginaEnviaModule { }
