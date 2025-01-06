import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { Inject, inject, PLATFORM_ID } from '@angular/core';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  if (typeof localStorage !== 'undefined') {
    if (localStorage.getItem('token') !== null) {
      {
        req = req.clone({
          setHeaders: { token: localStorage.getItem('token')! },
        });
      }
    }
  }
  return next(req);
};
