import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialThemeRoutingModule } from './material-theme-routing.module';
import { MaterialThemeComponent } from './material-theme.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { NotificacionesModule } from '../../models/notificaciones/notificaciones.module';



@NgModule({
  declarations: [
    MaterialThemeComponent
  ],
  imports: [
    CommonModule,
    MaterialThemeRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    NotificacionesModule
  ]
})
export class MaterialThemeModule { }
