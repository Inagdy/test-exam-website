import { AuthApiServices } from 'auth-api';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtomComponent } from '../../../shared/compaonents/UI/buttom/buttom.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ActivatedRoute, Router } from '@angular/router';
import { validateHeaderName } from 'http';
import { InputTextModule } from 'primeng/inputtext';
import { subscribe } from 'diagnostics_channel';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-verify',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtomComponent,
    InputTextModule,
    FormsModule,
    FloatLabelModule,
    MessagesModule
  ],
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.scss',
})
export class VerifyComponent implements OnInit {
  private readonly _authApiService = inject(AuthApiServices);
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  public data: string|null = null;
  messages:string =''

  verifyFrom: FormGroup = this._FormBuilder.group({
    resetCode: [null, Validators.maxLength(6)],
  });
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.data = params.get('data')
      console.log(this.data); 
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

  buttomclicked() {
    this._authApiService.verify(this.verifyFrom.value).subscribe({
      next: (res) => {
        res.status == 'Success'
          ? this._router.navigate(['./auth/resetpassword',this.data])
          : null;
      },
      error: (err) => {
        this.messages = err.error.message;
      },
    });
  }
}
