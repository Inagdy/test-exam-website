import { Injectable } from '@angular/core';
import { forgetadaptor } from '../interfaces/forgetadaptor';
import { forgetpasswordRes } from '../interfaces/forgetpasswordRes';


@Injectable({
  providedIn: 'root',
})
export class forgetPaswordAdaptor implements forgetadaptor {
  constructor() {}
  forgetadaptor(data: any): forgetpasswordRes {
    return {
      message: data.message,
      info: data.info,
    };
  }
}
