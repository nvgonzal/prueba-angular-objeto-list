import { Injectable } from '@angular/core';
import {Objeto} from '../models/objeto';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ObjetoService {
  constructor(private http: Http) {
  }
  getObjetos(): Observable<Objeto[]> {
    return this.http.get('http://prueba-angular.dev/api/objetos').map((response: Response) => response.json());
  }
}
