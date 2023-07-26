import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';


@NgModule({
  declarations: [
    PeliculasComponent
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule
  ]
})
export class PeliculasModule { }
