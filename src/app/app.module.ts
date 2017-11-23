import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaObjetoComponent } from './lista-objeto/lista-objeto.component';
import { NavbarComponent } from './navbar.component';
import {ObjetoService} from './servicios/objeto.service';
import {HttpModule} from '@angular/http';
import {Routes, RouterModule} from '@angular/router';
import { OtrosComponent } from './otros/otros.component';
import { HomeComponent } from './home/home.component';

const rutas: Routes = [
  {path: '', redirectTo: '/objetos', pathMatch: 'full'},
  {path: 'otros', component: OtrosComponent},
  {path: 'objetos', component: ListaObjetoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListaObjetoComponent,
    NavbarComponent,
    OtrosComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(rutas),
    BrowserModule,
    HttpModule
  ],
  providers: [ObjetoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
