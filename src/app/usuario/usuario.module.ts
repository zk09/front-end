import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CadastroComponent } from './cadastro/cadastro.component';
import { EditarComponent } from './editar/editar.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { ListaComponent } from './lista/lista.component';
import { UsuarioAppComponent } from './usuario.app.component';
import { UsuarioResolve } from './services/usuario.resolve';

import { UsuarioRoutingModule } from './usuario.route';
import { UsuarioService } from './services/usuario.service';

import { CustomFormsModule } from 'ngx-custom-validators'
import { NgBrazil } from 'ng-brazil' ;
import { TextMaskModule } from 'angular2-text-mask';
import {DpDatePickerModule} from 'ng2-date-picker';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    UsuarioAppComponent,
    CadastroComponent,
    ExcluirComponent,
    EditarComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UsuarioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomFormsModule,
    NgBrazil,
    TextMaskModule,
    DpDatePickerModule,
    NgxSpinnerModule
  ],
  providers: [
    UsuarioService,
    UsuarioResolve
  ]
})
export class UsuarioModule { }
