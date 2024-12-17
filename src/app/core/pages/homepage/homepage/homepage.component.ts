
import { Component} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';
import { ButtomComponent } from "../../../shared/compaonents/UI/buttom/buttom.component";
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [FontAwesomeModule, ButtonModule, ButtomComponent,FormsModule, InputTextModule ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent  {
  menuBar:boolean=false;

  menuClick(){
    this.menuBar = !this.menuBar;
  }
  
  buttomclicked(){}
  styles = {
    'background-color': 'var(--main-color )',
    'border-radius': '20px',
    'border-width': '0px',
    width: '100%',
    color: 'white',
    'text-align': 'center',
    height: '56px',
    cursor: 'pointer',
  };




}

