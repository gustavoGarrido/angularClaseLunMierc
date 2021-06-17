import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosModule } from './pages/usuarios/usuarios.module';
import { CrearUsuarioModule } from './pages/crear-usuario/crear-usuario.module';
import { LoginModule } from './pages/login/login.module';
import { PaginaInicioModule } from './pages/pagina-inicio/pagina-inicio.module';

const routes: Routes = [
  {
    path:"usuarios",
    loadChildren: ()=> import('src/app/pages/usuarios/usuarios.module').then(m=>UsuariosModule)
  },
  {
    path:"crearUsuario",
    loadChildren: ()=> import('src/app/pages/crear-usuario/crear-usuario.module').then(m=>CrearUsuarioModule)
  },
  {
    path:"login",
    loadChildren: ()=> import('src/app/pages/login/login.module').then(m=>LoginModule)
  },
  {
    path:"paginaInicio",
    loadChildren: ()=> import('src/app/pages/pagina-inicio/pagina-inicio.module').then(m=>PaginaInicioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
