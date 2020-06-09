import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  public usuarios: Usuario[]= [];
  errorMessage: string;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {

    this.usuarioService.obterTodos()
    .subscribe(
      usuarios => {
        this.usuarios = usuarios as [];
      },
      error => console.log(error)
      );
  }
}
