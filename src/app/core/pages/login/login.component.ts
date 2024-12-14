import { AuthApiServices } from 'auth-api';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtomComponent } from '../../../shared/compaonents/UI/buttom/buttom.component';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MessagesModule } from 'primeng/messages';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule,ButtomComponent,InputTextModule,FormsModule,FloatLabelModule,MessagesModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private _authApiService = inject(AuthApiServices);
  private _router = inject(Router);
  messages: string = '';

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

  login: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
      ),
    ]),
  });

  buttomclicked() {
    this._authApiService.login(this.login.value).subscribe({
      next: (res) => {
        this.messages = '';
        this._router.navigate(['./home']);
      },
      error: (err) => {
        this.messages = err.error.message;
      },
    });
  }
}
