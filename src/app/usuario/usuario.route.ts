import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioAppComponent } from './usuario.app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EditarComponent } from './editar/editar.component';
import { UsuarioResolve } from './services/usuario.resolve';
import { ExcluirComponent } from './excluir/excluir.component';
import { ListaComponent } from './lista/lista.component';


const usuarioRouterConfig: Routes = [
    {
        path: '', component: UsuarioAppComponent,
        children: [
            { path: 'listar-todos', component: ListaComponent },
            {
                path: 'cadastro', component: CadastroComponent
            },
            {
                path: 'editar/:id', component: EditarComponent,
                resolve: {
                    usuario: UsuarioResolve
                }
            },
            {
                path: 'excluir/:id', component: ExcluirComponent,
                resolve: {
                    usuario: UsuarioResolve
                }
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(usuarioRouterConfig)
    ],
    exports: [RouterModule]
})
export class UsuarioRoutingModule { }