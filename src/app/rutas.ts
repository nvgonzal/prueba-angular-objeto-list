import {Routes} from '@angular/router';
import {OtrosComponent} from './otros/otros.component';
import {ListaObjetoComponent} from './lista-objeto/lista-objeto.component';

const rutas: Routes = [
  {path: '', redirectTo: '/objetos', pathMatch: 'full'},
  {path: 'otros', component: OtrosComponent},
  {path: 'objetos', component: ListaObjetoComponent}
];

export {rutas};
