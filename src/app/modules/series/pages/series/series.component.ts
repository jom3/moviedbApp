import { Component, inject, signal } from '@angular/core';
import { Serie } from 'src/app/core/models/serie.model';
import { MoviebdService } from 'src/app/modules/home/services/moviebd.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {
  frontImage:string = environment.front_image;

  public AiringTodayTvShow = signal<Serie[]>([]);
  public OnTheAirTvShow = signal<Serie[]>([]);
  public PopularTvShow = signal<Serie[]>([]);
  public TopRatedTvShow = signal<Serie[]>([]);

  private moviedb = inject(MoviebdService);

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies(){
    this.getAiringTodayTvShow();
    this.getOnTheAirTvShow();
    this.getPopularTvShow();
    this.getTopRatedTvShow();
  }

  getAiringTodayTvShow(){
    this.moviedb.getAiringTodayTvShow().subscribe({
      next:r=>{
        this.AiringTodayTvShow.set(r)
      },
      error:e=>{
        console.log(e)
      }
    })
  }

  getOnTheAirTvShow(){
    this.moviedb.getOnTheAirTvShow().subscribe({
      next:r=>{
        this.OnTheAirTvShow.set(r)
      },
      error:e=>{
        console.log(e)
      }
    })
  }

  getPopularTvShow(){
    this.moviedb.getPopularTvShow().subscribe({
      next:r=>{
        this.PopularTvShow.set(r)
      },
      error:e=>{
        console.log(e)
      }
    })
  }

  getTopRatedTvShow(){
    this.moviedb.getTopRatedTvShow().subscribe({
      next:r=>{
        this.TopRatedTvShow.set(r)
      },
      error:e=>{
        console.log(e)
      }
    })
  }
}
