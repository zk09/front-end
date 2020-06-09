import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
import {UsuarioModule} from './usuario/usuario.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavegacaoModule,
    UsuarioModule,
    NgbModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot() 
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
