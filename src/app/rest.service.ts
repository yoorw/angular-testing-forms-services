import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {FormData} from './models';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: Http) { }

  getForms() {
    return this.http.get('api/forms').pipe(
      map((res: Response) => {
        // return res.json() as FormData[] || {};

        if(res.ok) {
          return res.json() as FormData[] || {};
        } else {
          return this.logError(res);
        }
      })
      // map((response) => {
      //   // if(response.ok) {
      //     response.json() as FormData[];
      //   // } else {
      //     // return this.logError(response);
      //   // }
      // })
    );
  }

  private logError(error: any) {
    try {
      error = error.json();
      console.error(error.error);
    } catch(e) {
      // ...ignore
      console.error(error);
    }

    return Observable.throw(error);
  }
}
