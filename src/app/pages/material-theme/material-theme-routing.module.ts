import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialThemeComponent } from './material-theme.component';

const routes: Routes = [
  {path:"", component:MaterialThemeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialThemeRoutingModule { }
