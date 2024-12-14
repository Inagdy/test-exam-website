import { Router, RouterLink } from '@angular/router';
import { AuthApiServices } from 'auth-api';
import { Component, inject, NgModule } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtomComponent } from '../../../shared/compaonents/UI/buttom/buttom.component';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { HttpErrorResponse } from '@angular/common/http';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtomComponent,
    InputTextModule,
    FormsModule,
    FloatLabelModule,
    MessagesModule,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  message: string | null = null;
  value: {} | undefined;

  private readonly _FormBuilder = inject(FormBuilder);

  constructor(private _authApiService: AuthApiServices) {}
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

  messages: string = '';
  private _router=inject( Router)

  registerForm: FormGroup = this._FormBuilder.group(
    {
      username: [
        null,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(25),
        ],
      ],
      firstName: [
        null,
        [Validators.required, Validators.pattern(/^[A-Za-z]+$/)],
      ],
      lastName: [
        null,
        [Validators.required, Validators.pattern(/^[A-Za-z]+$/)],
      ],
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
          ),
        ],
      ],
      rePassword: [null],
      phone: [null, [Validators.required]],
    },
    { validators: this.confirmPassowd }
  );

  confirmPassowd(from: AbstractControl) {
    if (from.get('password')?.value === from.get('rePassword')?.value) {
      return null;
    } else {
      return { mismatch: true };
    }
  }

  buttomclicked() {
    this._authApiService.register(this.registerForm.value).subscribe({
      next: (res) => {
       console.log('res')
       this._router.navigate(['./auth/login'])
      },
      error: (err: HttpErrorResponse) => {
        this.messages = err.error.message;
      },
    });
  }
}
