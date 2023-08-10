import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/core/models/movie.model';
import { MoviebdService } from 'src/app/modules/home/services/moviebd.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {

  frontImage:string = environment.front_image;
  backImage:string = environment.back_image;

  private queryString = signal<string>('');
  public movie = signal<any>({});

  private activateRoute = inject(ActivatedRoute);
  private moviedb = inject(MoviebdService);

  ngOnInit(): void {
    this.activateRoute.params.subscribe({
      next:r=>{
        this.queryString.set(r['id'])
      }
    })
    this.getMovieById();
  }

  getMovieById(){
    this.moviedb.getMovieById(this.queryString()).subscribe({
      next:r=>{
        this.movie.set(r);
      },
      error:e=>{
        console.log(e)
      }
    })
  }

  getFrontImage(path:string){
    return `${this.frontImage}/${path}`;
  }

  getBackImage(path:string){
    return `${this.backImage}/${path}`;
  }
}
