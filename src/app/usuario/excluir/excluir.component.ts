import { Component } from '@angular/core';
import { Usuario } from '../models/usuario';

import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html'
})
export class ExcluirComponent {

  usuario: Usuario = new Usuario();
  errors: any[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer) {

    this.usuario = this.route.snapshot.data['usuario'];
   
  }

  excluirEvento() {
    this.usuarioService.excluirUsuario(this.usuario.id)
      .subscribe(
        usuario => { this.sucessoExclusao(usuario) },
        error => { this.falha(error) }
      );
  }

  sucessoExclusao(evento: any) {

    const toast = this.toastr.success('Usuario excluido com Sucesso!', 'Good bye :D',{
        timeOut:2000
    });
    if (toast) {
      toast.onHidden.subscribe(() => {
        this.router.navigate(['/listar-todos']);
      });
    }
  }

  falha(fail) {
    this.errors = fail.error.errors;
    this.toastr.error('Houve um erro no processamento!', 'Ops! :(');
  }
}
