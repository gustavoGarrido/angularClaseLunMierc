import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  constructor() { }

  id_producto_retorna_servicio = 60

  dato_desde_hijo_a_padre = ""

  procesarPropagar(event:any){
    console.log("El evento emitido en el padre es: ",event);
    this.dato_desde_hijo_a_padre = event
  }

  ngOnInit(): void {
  }

}
