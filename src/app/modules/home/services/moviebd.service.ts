import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Movie, MovieResponse } from 'src/app/core/models/movie.model';
import { Serie, SeriesResponse } from 'src/app/core/models/serie.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MoviebdService {

  private http = inject(HttpClient);

  private baseUrl = environment.baseUrl;
  private api_key = environment.api_key;
  private language = environment.language;

  //movies
  getMoviesByQuery(query:string, page:number=1):Observable<MovieResponse>{
    return this.http.get<MovieResponse>(`${this.baseUrl}/search/movie?query=${query}&page=${page}&api_key=${this.api_key}&language=${this.language}`);
  }

  getMovieById(id:string):Observable<Movie>{
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?&api_key=${this.api_key}&language=${this.language}`);
  }

  getMoviesNowPLaying():Observable<Movie[]>{
    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/now_playing?api_key=${this.api_key}&language=${this.language}`)
    .pipe(map(result=>result.results as Movie[]))
  }

  getPopularMovies():Observable<Movie[]>{
    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/popular?api_key=${this.api_key}&language=${this.language}`)
    .pipe(map(result=>result.results));
  }

  getTopRatedMovies():Observable<Movie[]>{
    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/top_rated?api_key=${this.api_key}&language=${this.language}`)
    .pipe(map(result=>result.results));
  }

  getUpcomingMovies():Observable<Movie[]>{
    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/upcoming?api_key=${this.api_key}&language=${this.language}`)
    .pipe(map(result=>result.results));
  }

  //series

  getTvShowsByQuery(query:string, page:number=1):Observable<SeriesResponse>{
    return this.http.get<SeriesResponse>(`${this.baseUrl}/search/tv?query=${query}&page=${page}&api_key=${this.api_key}&language=${this.language}`);
  }

  getTvShowById(id:string):Observable<Serie>{
    return this.http.get<Serie>(`${this.baseUrl}/tv/${id}?&api_key=${this.api_key}&language=${this.language}`);
  }

  getAiringTodayTvShow():Observable<Serie[]>{
    return this.http.get<SeriesResponse>(`${this.baseUrl}/tv/airing_today?api_key=${this.api_key}&language=${this.language}`)
    .pipe(map(result=>result.results as Serie[]));
  }

  getOnTheAirTvShow():Observable<Serie[]>{
    return this.http.get<SeriesResponse>(`${this.baseUrl}/tv/on_the_air?api_key=${this.api_key}&language=${this.language}`)
    .pipe(map(result=>result.results as Serie[]));
  }

  getPopularTvShow():Observable<Serie[]>{
    return this.http.get<SeriesResponse>(`${this.baseUrl}/tv/popular?api_key=${this.api_key}&language=${this.language}`)
    .pipe(map(result=>result.results));
  }

  getTopRatedTvShow():Observable<Serie[]>{
    return this.http.get<SeriesResponse>(`${this.baseUrl}/tv/top_rated?api_key=${this.api_key}&language=${this.language}`)
    .pipe(map(result=>result.results as Serie[]));
  }




}
