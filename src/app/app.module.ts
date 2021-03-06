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
import {rutas} from './rutas';
import {FormsModule} from '@angular/forms';
import { ObjetoCreateComponent } from './lista-objeto/objeto-create/objeto-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaObjetoComponent,
    NavbarComponent,
    OtrosComponent,
    HomeComponent,
    ObjetoCreateComponent
  ],
  imports: [
    RouterModule.forRoot(rutas),
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ObjetoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
