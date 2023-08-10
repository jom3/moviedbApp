import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { SeriesComponent } from './pages/series/series.component';
import { SerieComponent } from './pages/serie/serie.component';
import { SerieCardComponent } from 'src/app/shared/components/serie-card/serie-card.component';


@NgModule({
  declarations: [
    SeriesComponent,
    SerieComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    SerieCardComponent
  ]
})
export class SeriesModule { }
