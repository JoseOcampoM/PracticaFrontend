import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/layout/nav/nav.component';
import { ListUsuarioComponent } from './components/usuario/list-usuario/list-usuario.component';
import { ListMarcaComponent } from './components/marca/list-marca/list-marca.component';
import { CreateUsuarioComponent } from './components/usuario/create-usuario/create-usuario.component';
import { ListVehiculoComponent } from './components/vehiculo/list-vehiculo/list-vehiculo.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { ListventasComponent } from './components/venta/listventas/listventas.component';
import {  MatButtonModule } from '@angular/material/button';
import {  MatIconModule } from '@angular/material/icon';
import { CreateVentasComponent } from './components/venta/create-ventas/create-ventas.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListUsuarioComponent,
    ListMarcaComponent,
    CreateUsuarioComponent,
    ListVehiculoComponent,
    ListventasComponent,
    CreateVentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
