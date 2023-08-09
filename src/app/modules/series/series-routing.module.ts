import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesComponent } from './pages/series/series.component';
import { SerieComponent } from './pages/serie/serie.component';

const routes: Routes = [
  {
    path:'series',
    component:SeriesComponent
  },
  {
    path:'serie/:id',
    component:SerieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }
