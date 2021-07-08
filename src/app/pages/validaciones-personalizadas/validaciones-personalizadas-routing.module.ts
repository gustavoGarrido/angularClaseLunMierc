import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidacionesPersonalizadasComponent } from './validaciones-personalizadas.component';

const routes: Routes = [
  {path:"", component: ValidacionesPersonalizadasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidacionesPersonalizadasRoutingModule { }
