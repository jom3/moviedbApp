import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('../peliculas/peliculas.module').then(m=>m.PeliculasModule)
  },
  {
    path:'',
    loadChildren:()=>import('../series/series.module').then(m=>m.SeriesModule)
  },
  {
    path:'**', component:NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
