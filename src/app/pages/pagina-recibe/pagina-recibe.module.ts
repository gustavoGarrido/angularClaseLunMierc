import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaRecibeRoutingModule } from './pagina-recibe-routing.module';
import { PaginaRecibeComponent } from './pagina-recibe.component';


@NgModule({
  declarations: [
    PaginaRecibeComponent
  ],
  imports: [
    CommonModule,
    PaginaRecibeRoutingModule
  ]
})
export class PaginaRecibeModule { }
