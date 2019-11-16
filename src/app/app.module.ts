import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { NavbarComponent } from './navbar/navbar.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { PanelModule } from 'primeng/panel';
import { MenubarModule } from 'primeng/menubar';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';


registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaClientesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PanelModule,
    MenubarModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    ConfirmDialogModule
    
  ],
  providers: [
    MessageService,
    
    { provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
