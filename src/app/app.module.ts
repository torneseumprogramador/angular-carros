import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrosComponent } from './carros/carros.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ComprasComponent } from './compras/compras.component';
import { NavigatorComponent } from './navigator/navigator.component';


@NgModule({
  declarations: [
    AppComponent,
    CarrosComponent,
    ClientesComponent,
    ComprasComponent,
    NavigatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'compras', component: ComprasComponent },
    ])
  ],
  providers: [],
  bootstrap: [
    AppComponent, 
    ClientesComponent, 
    NavigatorComponent
  ]
})
export class AppModule { }