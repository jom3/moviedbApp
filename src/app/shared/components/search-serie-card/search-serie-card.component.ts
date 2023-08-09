import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment.development';
import { Serie } from 'src/app/core/models/serie.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-serie-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './search-serie-card.component.html',
  styleUrls: ['./search-serie-card.component.css']
})
export class SearchSerieCardComponent {
  frontImage:string = environment.front_image;

  @Input() data!:Serie;

  getImage(path:string){
    return `${this.frontImage}/${path}`;
  }
}
