import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment.development';
import { Movie } from 'src/app/core/models/movie.model';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {

  frontImage:string = environment.front_image;

  @Input() data!:Movie;

  getImage(path:string){
    return `${this.frontImage}/${path}`;
  }
}
