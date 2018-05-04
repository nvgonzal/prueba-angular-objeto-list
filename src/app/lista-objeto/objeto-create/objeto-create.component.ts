import { Component, OnInit } from '@angular/core';
import {ObjetoService} from '../../servicios/objeto.service';

@Component({
  selector: 'app-objeto-create',
  templateUrl: './objeto-create.component.html',
  styleUrls: ['./objeto-create.component.css']
})
export class ObjetoCreateComponent implements OnInit {

  constructor(private objetoService: ObjetoService) { }

  ngOnInit() {
  }

  createObjeto(objeto) {
    this.objetoService.createObjeto(objeto)
      .subscribe(
        respuesta => console.log(respuesta),
        error => console.log(<any>error)
      );
}
}
