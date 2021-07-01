import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaRecibeComponent } from './pagina-recibe.component';

const routes: Routes = [
  {
    path:"", component:PaginaRecibeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaRecibeRoutingModule { }
