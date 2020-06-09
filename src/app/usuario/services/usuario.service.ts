import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { BaseService } from 'src/app/services/base.service';

@Injectable()
export class UsuarioService extends BaseService{

    constructor(private http:HttpClient){super();}
    usuario: Usuario = new Usuario();

registrarUsuario(usuario:Usuario):Observable<Usuario>{
    let response = this.http
    .post(this.urlServiceV1 + 'RegisterNewUser',usuario,this.ObterHeaderjson())
    .pipe(
        map(this.extractData),
        catchError(this.serviceError));

    return response;
    }

    atualizarUsuario(usuario: Usuario): Observable<Usuario> {
        return this.http
            .put(this.urlServiceV1 + "UpdateUser",usuario, this.ObterHeaderjson())
            .pipe(
                map(this.extractData),
                catchError(this.serviceError));
    }

    excluirUsuario(id: string): Observable<Usuario> {
        return this.http
            .delete(this.urlServiceV1 + "DeleteUser/" + id, this.ObterHeaderjson())
            .pipe(
                map(this.extractData),
                catchError(this.serviceError));
    }

    obterTodos(): Observable<Usuario[]> {
        return this.http
            .get<Usuario[]>(this.urlServiceV1 + "GetAllUser")
            .pipe( map(this.extractData),
                catchError(this.serviceError));
    }

    obterPorId(id: string): Observable<Usuario> {
        return this.http
            .get<Usuario>(this.urlServiceV1 + "GetUser/" + id, this.ObterHeaderjson())
                .pipe(map(this.extractData),
                catchError(this.serviceError));
    }


}