import { AuthAPIAdapter } from './adapter/auth-api.adapter';
import { Injectable } from '@angular/core';
import { AuthAPI } from './base/AuthAPI';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthEndPoint } from './enums/AuthAPI.endpoints';
import { LoginUser } from './interfaces/login';
import { LoginApiRes, LoginRes } from './interfaces/loginRes';
import { forgetPaswordAdaptor } from './adapter/forgetPasswordAdaptor';
import { forgetpassword } from './interfaces/forgetpassord';


@Injectable({
  providedIn: 'root',
})
export class AuthApiServices implements AuthAPI {
  constructor(
    private _httpClient: HttpClient,
    private _authAPIAdapter: AuthAPIAdapter,
    private _forgetPaswordAdaptor: forgetPaswordAdaptor
  ) {}
  login(data: LoginUser): Observable<LoginApiRes> {
    return this._httpClient
      .post(AuthEndPoint.LOGIN, data)
      .pipe(map((res) => this._authAPIAdapter.adapt(res)));
  }
  register(data: any): Observable<LoginApiRes> {
    return this._httpClient
      .post(AuthEndPoint.REGISTER, data)
      .pipe(map((res) => this._authAPIAdapter.adapt(res)));
  }
  resetpassword(data: any): Observable<any> {
    return this._httpClient.put(AuthEndPoint.RESET_PASSWORD, data);
  }
  forgetPassword(data: forgetpassword): Observable<any> {
    return this._httpClient
      .post(AuthEndPoint.FORGET_PASSWORD, data)
      .pipe(map((res) => this._forgetPaswordAdaptor.forgetadaptor(res)));
  }
  verify(data: any): Observable<any> {
    return this._httpClient.post(AuthEndPoint.VERIFY_CODE, data);
  }
}
