import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { CommonModule } from '@angular/common';
import { NoticiaComponent } from './pages/noticia/noticia.component';
import { FavoritoComponent } from './pages/favorito/favorito.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'noticia/:id',
    component: NoticiaComponent
  },
  {
    path: 'buscar/:texto',
    component: BuscarComponent
  },{
    path: 'favorito',
    component: FavoritoComponent
  },{
    path: 'usuario',
    component: UsuarioComponent
  },{
    path: 'login',
    component: LoginComponent
  },{
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
