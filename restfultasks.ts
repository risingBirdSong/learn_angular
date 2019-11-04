import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http : HttpClient) {
    this.getTasks();
   }

  getTasks() {
    let tempobserverable = this._http.get('/tasks');
    tempobserverable.subscribe(data => console.log('our data ! ______', data));

  }

}
