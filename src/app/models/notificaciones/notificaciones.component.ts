import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }

  success(texto:string){

    this._snackBar.open(texto, "", {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    })
  }

  error(){
    this._snackBar.open("ha sucedido un error en la app", "", {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    })
  }

  ngOnInit(): void {
  }

}
