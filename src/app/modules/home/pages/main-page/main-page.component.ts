import { Component, inject, signal } from '@angular/core';
import { Movie } from 'src/app/core/models/movie.model';
import { MoviebdService } from '../../services/moviebd.service';
import { Serie } from 'src/app/core/models/serie.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  public OnTheAirTvShow = signal<Serie[]>([]);
  public PopularTvShow = signal<Serie[]>([]);
  public UpcomingMovies = signal<Movie[]>([]);
  public PopularMovies = signal<Movie[]>([]);

  public hasError = signal<boolean>(false);

  private moviedb = inject(MoviebdService);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  searchForm:FormGroup = this.fb.group({
    searchInput:['',[Validators.required]]
  })

  ngOnInit(): void {
    this.getAllSections();
  }

  getAllSections(){
    this.getOnTheAirTvShow();
    this.getPopularTvShow();
    this.getUpcomingMovies();
    this.getPopularMovies();
  }

  search(){
    if(!this.searchForm.valid) {
      this.hasError.set(true);
      setTimeout(() => {
        this.hasError.set(false)
      }, 5000);
      return;
    }
    const searchQuery = this.searchForm.value.searchInput;
    this.router.navigate(['search'],{queryParams:{'query':searchQuery}})
  }

  getOnTheAirTvShow(){
    this.moviedb.getOnTheAirTvShow().subscribe({
      next:r=>{
        this.OnTheAirTvShow.set(r)
      },
      error:e=>{
        console.log(e)
      },
    })
  }

  getPopularTvShow(){
    this.moviedb.getPopularTvShow().subscribe({
      next:r=>{
        this.PopularTvShow.set(r)
      },
      error:e=>{
        console.log(e)
      },
    })
  }

  getUpcomingMovies(){
    this.moviedb.getUpcomingMovies().subscribe({
      next:r=>{
        this.UpcomingMovies.set(r)
      },
      error:e=>{
        console.log(e)
      },
    })
  }

  getPopularMovies(){
    this.moviedb.getPopularMovies().subscribe({
      next:r=>{
        this.PopularMovies.set(r)
      },
      error:e=>{
        console.log(e)
      },
    })
  }

}
