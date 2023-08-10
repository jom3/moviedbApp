import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviebdService } from 'src/app/modules/home/services/moviebd.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent {
  frontImage:string = environment.front_image;
  backImage:string = environment.back_image;

  private queryString = signal<string>('');
  public serie = signal<any>({});

  private activateRoute = inject(ActivatedRoute);
  private moviedb = inject(MoviebdService);

  ngOnInit(): void {
    this.activateRoute.params.subscribe({
      next:r=>{
        this.queryString.set(r['id'])
      }
    })
    this.getSerieById();
  }

  getSerieById(){
    this.moviedb.getTvShowById(this.queryString()).subscribe({
      next:r=>{
        this.serie.set(r);
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
