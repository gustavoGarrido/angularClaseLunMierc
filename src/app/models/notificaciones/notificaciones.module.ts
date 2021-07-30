import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificacionesComponent } from './notificaciones.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    NotificacionesComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[
    NotificacionesComponent
  ]
})
export class NotificacionesModule { }
