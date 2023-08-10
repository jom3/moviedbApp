import { Component } from '@angular/core';
import { navigation } from '../../../../data/navigation';
import { Navigation } from 'src/app/core/models/navigation.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

 navigation:Navigation[]=navigation;

 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
 }
}
