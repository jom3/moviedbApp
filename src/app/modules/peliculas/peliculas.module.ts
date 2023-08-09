import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { MovieCardComponent } from 'src/app/shared/components/movie-card/movie-card.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';


@NgModule({
  declarations: [
    PeliculasComponent,
    PeliculaComponent
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    MovieCardComponent,
  ]
})
export class PeliculasModule { }
