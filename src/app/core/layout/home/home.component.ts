import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ButtomComponent } from "../../../shared/compaonents/UI/buttom/buttom.component";
import { RouterLink, RouterOutlet } from '@angular/router';






@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule, ButtonModule,RouterOutlet,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  styles = {
    'background-color': "var(--main-color )",
    'border-radius': '20px',
    'border-width': '0px',
    'width': '410px',
    'color': 'white',
    'text-align': 'center',
    'height': '56px',
    'font-weight': '400',
    'font-size': '16px',
    'line-height': '24px',
  };


  
}
