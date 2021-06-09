import { Component, NgModule } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'claseLunMier';

  titulo:string = "Titulo de mi aplicacion"

  claseColorAzul = "colorAzul"

  binding:string = "binding"

  cantidad:number = 5;

  valor_ng_if:boolean = true;

  cambiarColor(){
    this.claseColorAzul = "colorRojo"
  }

  cambiarNgIf(){
    this.valor_ng_if = !this.valor_ng_if
  }

  usuarios:Array<any> =[
    {
      id_usuario:2,
      nombre_usuario: "ggarrido",
      rol: "Administrador"
    },
    {
      id_usuario: 3,
      nombre_usuario: "Santiago",
      rol:"administrador"
    },
    {
      id_usuario: 4,
      nombre_usuario: "Scheduler",
      rol:"Sys"
    }
  ]

  clientes:Array<any>= [
    {
      id_cliente:1,
      nombre_cliente: "Andreani",
      categoria_cliente: "nuevo"
    },
    {
      id_cliente:2,
      nombre_cliente: "Oca",
      categoria_cliente: "principal"
    
    },
    {
      id_cliente:3,
      nombre_cliente:"Correo Argentino",
      categoria_cliente: "no_definida"
    }
    
  ]

}
