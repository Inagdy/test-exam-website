import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllExamesService {

 private readonly _HttpClient=inject(HttpClient)

 getAllExames(token:string):Observable<any>{

   return this._HttpClient.get('https://exam.elevateegy.com/api/v1/exams')
   headers: {token}  
    }   
  }
  

