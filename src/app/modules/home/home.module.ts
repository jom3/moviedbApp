import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MovieCardComponent } from 'src/app/shared/components/movie-card/movie-card.component';
import { SerieCardComponent } from 'src/app/shared/components/serie-card/serie-card.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SearchMovieCardComponent } from 'src/app/shared/components/search-movie-card/search-movie-card.component';
import { SearchSerieCardComponent } from 'src/app/shared/components/search-serie-card/search-serie-card.component';


@NgModule({
  declarations: [

    HomePageComponent,
       NotFoundPageComponent,
       NavbarComponent,
       FooterComponent,
       MainPageComponent,
       SearchPageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SerieCardComponent,
    MovieCardComponent,
    SearchMovieCardComponent,
    SearchSerieCardComponent
  ]
})
export class HomeModule { }
