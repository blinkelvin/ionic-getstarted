import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as AppInfo from '../../app/app.info';

import { Md5 } from 'ts-md5/dist/md5';
/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ServiceProvider {
  hash = Md5.hashStr('1'+'819dbca1983f326a1f692a557981f69d0c3e958b'+'5691e3d1be088ff91ec7aa8e60db1c44')

  constructor(public http: Http) {}

  getCharacters(i: number){
    let api: string = AppInfo.apiUrl + "characters?ts=1&apikey=5691e3d1be088ff91ec7aa8e60db1c44&hash=" + this.hash + "&offset=" + i;
    return this.http.get(api).map(res => res.json().data.results);
  }

}
