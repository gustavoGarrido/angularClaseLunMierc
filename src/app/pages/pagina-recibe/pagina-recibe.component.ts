import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina-recibe',
  templateUrl: './pagina-recibe.component.html',
  styleUrls: ['./pagina-recibe.component.css']
})
export class PaginaRecibeComponent implements OnInit {

  constructor(public activateRoute: ActivatedRoute) { }

  id_producto:any = this.activateRoute.snapshot.paramMap.get('id_producto');

  ngOnInit(): void {
    let dato = JSON.parse(this.id_producto)
    console.log(dato);
  }

}
