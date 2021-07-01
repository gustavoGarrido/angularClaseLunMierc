import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pagina-envia',
  templateUrl: './pagina-envia.component.html',
  styleUrls: ['./pagina-envia.component.css']
})
export class PaginaEnviaComponent implements OnInit {

  constructor(private router: Router) { }

  objeto = {
    nombre:"gustavo",
    apellido: "g",
    telefono: "4564"
  }

  enviarDataParam(){
    let dataEnvio = JSON.stringify(this.objeto)
    this.router.navigate([`../paginaRecibe/${dataEnvio}`])
  }

  ngOnInit(): void {
  }

}
