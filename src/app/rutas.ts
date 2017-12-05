import {Routes} from '@angular/router';
import {OtrosComponent} from './otros/otros.component';
import {ListaObjetoComponent} from './lista-objeto/lista-objeto.component';
import {ObjetoCreateComponent} from './lista-objeto/objeto-create/objeto-create.component';

const rutas: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'otros', component: OtrosComponent},
  {path: 'objetos', component: ListaObjetoComponent},
  {path: 'objetos/create', component: ObjetoCreateComponent}
];

export {rutas};
