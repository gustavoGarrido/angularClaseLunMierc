import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsandoSpinnerRoutingModule } from './usando-spinner-routing.module';
import { UsandoSpinnerComponent } from './usando-spinner.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    UsandoSpinnerComponent
  ],
  imports: [
    CommonModule,
    UsandoSpinnerRoutingModule,
    MatDialogModule
  ]
})
export class UsandoSpinnerModule { }
