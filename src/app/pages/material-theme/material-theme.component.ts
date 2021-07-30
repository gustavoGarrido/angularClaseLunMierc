import { Component, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { NotificacionesComponent } from '../../models/notificaciones/notificaciones.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-material-theme',
  templateUrl: './material-theme.component.html',
  styleUrls: ['./material-theme.component.css']
})
export class MaterialThemeComponent implements OnInit {

  constructor(public overlayContainer: OverlayContainer, public snackBar: MatSnackBar) { }

  notificaciones = new NotificacionesComponent(this.snackBar)

  @HostBinding('class') componentClassCss:any

  onSetTheme(e:any){
    this.overlayContainer.getContainerElement().classList.add(e);
    this.componentClassCss = e
    console.log(e);

    this.notificaciones.success("Tema cambiado con exito")

  }

  datosBackend:any = []

  traerUsuarios(){
    this.datosBackend = [
      {nombre:"gustavo", tipo_documento: "dni"},
      {nombre:"ernesto", tipo_documento:"dni"}
    ]
  }


  ngOnInit(): void {
  }

}
