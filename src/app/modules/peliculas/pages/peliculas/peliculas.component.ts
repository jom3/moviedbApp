import { Component, inject, signal } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Movie } from 'src/app/core/models/movie.model';
import { MoviebdService } from 'src/app/modules/home/services/moviebd.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {
  frontImage:string = environment.front_image;

  public NowPlayingMovies = signal<Movie[]>([]);
  public PopularMovies = signal<Movie[]>([]);
  public TopRatedMovies = signal<Movie[]>([]);
  public UpcomingMovies = signal<Movie[]>([]);

  private moviedb = inject(MoviebdService);

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies(){
    this.getMoviesNowPLaying();
    this.getPopularMovies();
    this.getTopRatedMovies();
    this.getUpcomingMovies();
  }

  getMoviesNowPLaying(){
    this.moviedb.getMoviesNowPLaying().subscribe({
      next:r=>{
        this.NowPlayingMovies.set(r)
      },
      error:e=>{
        console.log(e)
      }
    })
  }

  getPopularMovies(){
    this.moviedb.getPopularMovies().subscribe({
      next:r=>{
        this.PopularMovies.set(r)
      },
      error:e=>{
        console.log(e)
      }
    })
  }

  getTopRatedMovies(){
    this.moviedb.getTopRatedMovies().subscribe({
      next:r=>{
        this.TopRatedMovies.set(r)
      },
      error:e=>{
        console.log(e)
      }
    })
  }

  getUpcomingMovies(){
    this.moviedb.getUpcomingMovies().subscribe({
      next:r=>{
        this.UpcomingMovies.set(r)
      },
      error:e=>{
        console.log(e)
      }
    })
  }

}
