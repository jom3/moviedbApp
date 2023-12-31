import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment.development';
import { Movie } from 'src/app/core/models/movie.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule,RouterModule],
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
