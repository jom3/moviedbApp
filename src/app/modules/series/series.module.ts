import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { SeriesComponent } from './pages/series/series.component';
import { SerieComponent } from './pages/serie/serie.component';


@NgModule({
  declarations: [
    SeriesComponent,
    SerieComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule
  ]
})
export class SeriesModule { }
