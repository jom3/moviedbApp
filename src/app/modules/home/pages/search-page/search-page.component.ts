import { Component, inject, signal } from '@angular/core';
import { MoviebdService } from '../../services/moviebd.service';
import { ActivatedRoute } from '@angular/router';
import { Movie, MovieResponse } from 'src/app/core/models/movie.model';
import { environment } from 'src/environments/environment.development';
import { Serie } from 'src/app/core/models/serie.model';

enum currentSearchs {
  'movies'='MOVIES',
  'series'='SERIES'
}

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})

export class SearchPageComponent {

  frontImage:string = environment.front_image;
  enum: typeof currentSearchs = currentSearchs;

  private queryString = signal<string>('');
  public maxPage = signal<number>(0);
  public movies = signal<Movie[]>([]);
  public series = signal<Serie[]>([]);
  public page = signal<number>(1);
  public currentSearch = signal<string>('movies');

  private moviedbd = inject(MoviebdService);
  private activeRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe({
      next:r=>{
        this.queryString.set(r['query'])
      }
    });
    this.getMoviesByQuery();
  }

  getMoviesByQuery(){
    this.moviedbd.getMoviesByQuery(this.queryString(), this.page()).subscribe({
      next:r=>{
        this.movies.set(r['results']);
        this.maxPage.set(r['total_pages']);
      },
      error:e=> console.log(e)
    })
  }
  getTvShowsByQuery(){
    this.moviedbd.getTvShowsByQuery(this.queryString(), this.page()).subscribe({
      next:r=>{
        this.series.set(r['results']);
        this.maxPage.set(r['total_pages']);
      },
      error:e=> console.log(e)
    })
  }

  setNextPage(value:number){
    if((this.page()+value)==0 || (this.page()+value)>this.maxPage()) return;
    this.page.set(this.page()+value);
    if(this.currentSearch()=='movies'){
      this.getMoviesByQuery()
    }else if(this.currentSearch()=='series'){
      this.getTvShowsByQuery();
    }else{
      return;
    }
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  changeSearch(event:any){
    this.currentSearch.set(event.target.id);
    if(this.currentSearch()=='movies'){
      this.getMoviesByQuery();
      this.page.set(1);
    }else if(this.currentSearch()=='series'){
      this.getTvShowsByQuery();
      this.page.set(1);
    }else{
      return;
    }
  }

  getImage(path:string){
    return `${this.frontImage}/${path}`;
  }
}
