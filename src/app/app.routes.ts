import { Routes } from '@angular/router';
import { VerifyComponent } from '../app/core/pages/verify/verify.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadComponent: () =>
      import('./core/layout/home/home.component').then((m) => m.HomeComponent),
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./core/pages/login/login.component').then(
            (m) => m.LoginComponent
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./core/pages/register/register.component').then(
            (m) => m.RegisterComponent
          ),
      },
      {
        path: 'forgetpassword',
        loadComponent: () =>
          import('./core/pages/forget-password/forget-password.component').then(
            (m) => m.ForgetPasswordComponent
          ),
      },
      {
        path: 'verify/:data',
        loadComponent: () =>
          import('./core/pages/verify/verify.component').then(
            (m) => m.VerifyComponent
          ),
      },
      {
        path: 'resetpassword/:data',
        loadComponent: () =>
          import('./core/pages/reset-password/reset-password.component').then(
            (m) => m.ResetPasswordComponent
          ),
      },
    ],
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./core/pages/homepage/homepage.component').then(
        (m) => m.HomepageComponent
      ),
  },
];
