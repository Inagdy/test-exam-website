
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent  {
  menuBar:boolean=false;

  menuClick(){
    this.menuBar = !this.menuBar;
  }


}

