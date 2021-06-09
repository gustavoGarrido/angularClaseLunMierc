import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosModule } from './pages/usuarios/usuarios.module';
import { CrearUsuarioModule } from './pages/crear-usuario/crear-usuario.module';

const routes: Routes = [
  {
    path:"usuarios",
    loadChildren: ()=> import('src/app/pages/usuarios/usuarios.module').then(m=>UsuariosModule)
  },
  {
    path:"crearUsuario",
    loadChildren: ()=> import('src/app/pages/crear-usuario/crear-usuario.module').then(m=>CrearUsuarioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
