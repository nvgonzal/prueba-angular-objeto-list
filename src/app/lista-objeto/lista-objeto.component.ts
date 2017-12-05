import { Component, OnInit } from '@angular/core';
import {Objeto} from '../models/objeto'
import {ObjetoService} from '../servicios/objeto.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-lista-objeto',
  templateUrl: './lista-objeto.component.html',
  styleUrls: ['./lista-objeto.component.css']
})
export class ListaObjetoComponent implements OnInit {
  objetos$: Observable<Objeto[]>;
  constructor(private objetoService: ObjetoService) { }

  ngOnInit() {
    this.objetos$ = this.objetoService.getObjetos();
  }

}
