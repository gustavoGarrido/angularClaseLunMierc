import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipePagesRoutingModule } from './pipe-pages-routing.module';
import { PipePagesComponent } from './pipe-pages.component';
import { PipeModule } from 'src/app/pipes/pipe/pipe.module';


@NgModule({
  declarations: [
    PipePagesComponent
  ],
  imports: [
    CommonModule,
    PipePagesRoutingModule,
    PipeModule
  ]
})
export class PipePagesModule { }
