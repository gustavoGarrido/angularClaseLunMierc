import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaEnviaComponent } from './pagina-envia.component';

const routes: Routes = [
  {path:"", component:PaginaEnviaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaEnviaRoutingModule { }
