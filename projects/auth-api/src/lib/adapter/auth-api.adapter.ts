import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter';
import { LoginRes ,LoginApiRes} from '../interfaces/loginRes';

@Injectable({
  providedIn: 'root',
})
export class AuthAPIAdapter implements Adapter{
  constructor() {}
  adapt(data:any) :LoginApiRes {
    return {
      message: data.message,
      token: data.token,
      user: {
        _id: data.user._id,
        username: data.user.username,
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        email: data.user.email,
        phone: data.user.phone,
        role: data.user.role,
        isVerified: data.user.isVerified,
        createdAt: data.user.createdAt,
      },
    };
  }
}
