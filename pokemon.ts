import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {RootObject} from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http : HttpClient) {
    this.getTasks();
   }

  getTasks() {
    // let tempobserverable = this._http.get('/tasks');
    // tempobserverable.subscribe(data => console.log('our data ! ______', data));

    let fetchme = fetch('https://pokeapi.co/api/v2/pokemon/1/').then(data => data.json()).then(res => console.log(res));

    let myfuturecall;

    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    console.log(bulbasaur)
    bulbasaur.subscribe((data : RootObject) => {
      let theData = data as RootObject;
      let test = data.abilities[0].ability.name;
      

      console.log('subscribe to bubly', data);
      this.makeACall(theData.abilities[0].ability.url);
      this.makeACall(theData.abilities[1].ability.url);
      this.makeACall(theData.abilities[2].ability.url);

    });
    // let pokemon_a = this._http.get('/https://pokeapi.co/api/v2/pokemon/1/');
    //   pokemon_a.subscribe(gotback => console.log('what we got back', gotback));

  }

  makeACall(url : string) {
    let ourobserver = this._http.get(url);
    ourobserver.subscribe(data => console.log('the data coming back ______ !!', data))
  }

}
