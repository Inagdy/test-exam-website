import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AllserviceService {

  constructor(private _http: HttpClient,@Inject(PLATFORM_ID) private platfrom:object){ 
    if (isPlatformBrowser(this.platfrom)) {
      if (localStorage.getItem('token')) {
        console.log('from service');
     }

   }
  }

  getTestData(): Observable<any> {
    return this._http.get('https://exam.elevateegy.com/api/v1/subjects');
  }
}


