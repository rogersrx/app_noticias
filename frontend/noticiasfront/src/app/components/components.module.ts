import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

import { SlideshowComponent } from './slideshow/slideshow.component';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { NoticiapostergridComponent } from './noticiapostergrid/noticiapostergrid.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    NoticiapostergridComponent
  ],
  exports:[
    NavbarComponent,
    SlideshowComponent,
    NoticiapostergridComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule
  ]
})
export class ComponentsModule { }
