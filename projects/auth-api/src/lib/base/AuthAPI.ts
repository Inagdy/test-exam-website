import { Observable } from "rxjs";

export abstract class AuthAPI{
    abstract login(data:any):Observable<any>
    abstract register(data:any):Observable<any>
    abstract resetpassword(data:any):Observable<any>
    abstract forgetPassword(data:any):Observable<any>
    abstract verify(data:any):Observable<any>
}