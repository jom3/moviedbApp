import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from 'src/app/core/models/movie.model';
import { environment } from 'src/environments/environment.development';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-movie-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './search-movie-card.component.html',
  styleUrls: ['./search-movie-card.component.css']
})
export class SearchMovieCardComponent {

  frontImage:string = environment.front_image;

  @Input() data!:Movie;

  getImage(path:string){
    return `${this.frontImage}/${path}`;
  }
}
