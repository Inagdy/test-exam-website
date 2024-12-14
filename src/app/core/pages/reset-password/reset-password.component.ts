import { ActivatedRoute } from '@angular/router';
import { Router, RouterLink } from '@angular/router';
import { Component, inject } from '@angular/core';
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
import { AuthApiServices } from 'auth-api';

interface Userdata {
  email: string | null;
  newPassword: string;
}

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtomComponent,
    InputTextModule,
    FormsModule,
    FloatLabelModule,
    MessagesModule,
    RouterLink,
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
})
export class ResetPasswordComponent {
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _authApiService = inject(AuthApiServices);
  private readonly route = inject(ActivatedRoute);
  public data?: string | null;
  private user!: Userdata;

  constructor() {
    this.user = {
      email: '',
      newPassword: '',
    };
  }

  setPassword: FormGroup = this._FormBuilder.group(
    {
      password: [
        null,
        [
          Validators.required,
          Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
        ],
      ],
      rePassword: [null],
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

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.data = params.get('data');
      this.user.email = this.data;
    });
  }

  buttomclicked() {
    this.user.newPassword = this.setPassword.value.password;
    this._authApiService.resetpassword(this.user).subscribe({
      next: (res) => {
        console.log(res);
    
      },
      error(err) {
        console.log(err);
      },
    });
  }

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
}
