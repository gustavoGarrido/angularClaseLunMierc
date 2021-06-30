import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosModule } from './pages/usuarios/usuarios.module';
import { CrearUsuarioModule } from './pages/crear-usuario/crear-usuario.module';
import { LoginModule } from './pages/login/login.module';
import { PaginaInicioModule } from './pages/pagina-inicio/pagina-inicio.module';
import { UpdateUsuarioModule } from './pages/update-usuario/update-usuario.module';
import { AuthGuard } from './guards/auth.guard';

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
  },
  {
    path:"updateUsuario",
    loadChildren: ()=> import('src/app/pages/update-usuario/update-usuario.module').then(m=>UpdateUsuarioModule),
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
