import { ValidacionesPersonalizadasModule } from './pages/validaciones-personalizadas/validaciones-personalizadas.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosModule } from './pages/usuarios/usuarios.module';
import { CrearUsuarioModule } from './pages/crear-usuario/crear-usuario.module';
import { LoginModule } from './pages/login/login.module';
import { PaginaInicioModule } from './pages/pagina-inicio/pagina-inicio.module';
import { UpdateUsuarioModule } from './pages/update-usuario/update-usuario.module';
import { AuthGuard } from './guards/auth.guard';
import { PaginaEnviaModule } from './pages/pagina-envia/pagina-envia.module';
import { PaginaRecibeModule } from './pages/pagina-recibe/pagina-recibe.module';
import { EnviarImagenesModule } from './pages/enviar-imagenes/enviar-imagenes.module';
import { PipePagesModule } from 'src/app/pages/pipe-pages/pipe-pages.module';
import { UsandoSpinnerModule } from './pages/usando-spinner/usando-spinner.module';

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
  },
  {
    path:"paginaEnvia",
    loadChildren: ()=> import('src/app/pages/pagina-envia/pagina-envia.module').then(m=>PaginaEnviaModule),
    // canActivate:[AuthGuard]
  },
  {
    path:"paginaRecibe/:id_producto",
    loadChildren: ()=> import('src/app/pages/pagina-recibe/pagina-recibe.module').then(m=>PaginaRecibeModule),
    // canActivate:[AuthGuard]
  },
  {
    path:"enviarImagenes",
    loadChildren: ()=> import('src/app/pages/enviar-imagenes/enviar-imagenes.module').then(m=>EnviarImagenesModule),
    // canActivate:[AuthGuard]
  },
  {
    path:"pipePage",
    loadChildren: ()=> import('src/app/pages/pipe-pages/pipe-pages.module').then(m=>PipePagesModule),
    // canActivate:[AuthGuard]
  },
  {
    path:"valPersonalizadas",
    loadChildren: ()=> import('src/app/pages/validaciones-personalizadas/validaciones-personalizadas.module').then(m=>ValidacionesPersonalizadasModule),
    // canActivate:[AuthGuard]
  },
  {
    path:"spinner",
    loadChildren: ()=> import('src/app/pages/usando-spinner/usando-spinner.module').then(m=>UsandoSpinnerModule),
    // canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
