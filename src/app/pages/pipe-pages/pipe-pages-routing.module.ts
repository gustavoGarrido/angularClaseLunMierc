import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipePagesComponent } from './pipe-pages.component';

const routes: Routes = [
  {path:"", component:PipePagesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipePagesRoutingModule { }
