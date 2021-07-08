import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsandoSpinnerComponent } from './usando-spinner.component';

const routes: Routes = [
  {path:"", component:UsandoSpinnerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsandoSpinnerRoutingModule { }
