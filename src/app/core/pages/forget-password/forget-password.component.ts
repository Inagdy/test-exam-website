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
import { Router } from '@angular/router';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtomComponent,
    InputTextModule,
    FormsModule,
    FloatLabelModule,
    MessagesModule
  ],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss',
})
export class ForgetPasswordComponent {
  forgetPassword: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email]),
  });

  messages:string=''

  private _authApiServices = inject(AuthApiServices);
  private _router = inject(Router);

  styles = {
    'background-color': 'var(--main-color )',
    'border-radius': '20px',
    'border-width': '0px',
    width: '100%',
    color: 'white',
    'text-align': 'center',
    height: '56px',
    'margin-top': '40px',
    cursor: 'pointer',
    
  };

  buttomclicked() {
    this._authApiServices.forgetPassword(this.forgetPassword.value).subscribe({
      next: (res) => {

        res.message == 'success'
          ? this._router.navigate(['./auth/verify',this.forgetPassword.value.email])
          : null;
      },
      error: (err) => {
        this.messages = err.error.message;
      },
    });
  }
}
