import { Injectable } from '@angular/core';
import {Objeto} from '../models/objeto';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {URL} from './variables_globales';

@Injectable()
export class ObjetoService {
  constructor(private http: Http) {
  }
  getObjetos(): Observable<Objeto[]> {
    return this.http.get(URL + '/api/objetos').map((response: Response) => response.json());
  }
  createObjeto(objeto: Object): Observable<Objeto[]> {
    return this.http.post(URL + '/api/objetos/create', objeto)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error() || {message: 'Error del servidor'}));
  }

}
