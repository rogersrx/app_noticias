import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ComponentsModule } from '../components/components.module';
import { FavoritoComponent } from './favorito/favorito.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';

import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    NoticiaComponent,
    BuscarComponent,
    FavoritoComponent,
    UsuarioComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule
  ]
})
export class PagesModule { }
