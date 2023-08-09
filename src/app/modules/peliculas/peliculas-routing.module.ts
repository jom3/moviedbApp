import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';

const routes: Routes = [
  {
    path:'peliculas',
    component:PeliculasComponent
  },
  {
    path:'pelicula/:id',
    component:PeliculaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
