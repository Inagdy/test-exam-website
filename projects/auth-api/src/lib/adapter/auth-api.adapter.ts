import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter';
import { LoginRes } from '../interfaces/loginRes';

@Injectable({
  providedIn: 'root',
})
export class AuthAPIAdapter implements Adapter{
  constructor() {}
  adapt(data:any) :LoginRes {
    return {
      message: data.message,
      token: data.token,
      userEmail: data.user.email,
    };
  }
}
