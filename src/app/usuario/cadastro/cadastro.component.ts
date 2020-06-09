import {Component, OnInit, AfterViewInit,ElementRef,ViewChildren} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl,FormControlName } from '@angular/forms';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';
import { GenericValidator, ValidationMessages, DisplayMessage } from 'src/app/utils/generic-form-validation';
import { CustomValidators } from 'ngx-custom-validators';
import { NgBrazilValidators } from 'ng-brazil';
import { Observable, fromEvent, merge } from 'rxjs';
import {utilsBr} from 'js-brasil';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({

    selector:'app-cadastro',
    templateUrl:'./cadastro.component.html'
})
export class CadastroComponent implements OnInit,AfterViewInit{

    @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

    errors: any[] = [];
    cadastroForm:FormGroup;
    usuario:Usuario;
    MASKS = utilsBr.MASKS;

    validationonMessages: ValidationMessages;
    genericValidator: GenericValidator;
    displayMessage: DisplayMessage = {};
    
    constructor(private fb:FormBuilder,
        private usuarioService: UsuarioService,
        private toastr:ToastrService,
        private router: Router
        ){
            
            this.validationonMessages = {
                        name:{
                            required:'Informe o nome',
                            rangeLength:'o nome deve possuir entre 2 a 150 caracteres'
                        },
                        email:{
                            required:'Informe o e-mail',
                            email:'Email inválido'
                        },
                        cpf:{
                            required:'Informe o cpf',
                            cpf: 'CPF inválido'
                        },
                        dateBirth:{
                            required:'Informe a data de nascimento'
                        },
                        city:{
                            required:'Informe a cidade'
                        },
                        zipCode:{
                            required:'Informe o CEP'
                        },
                        state:{
                            required:'Informe o Estado'
                        }

                    };
                    this.genericValidator = new GenericValidator(this.validationonMessages);

                }

    ngOnInit(){

        let cep = new FormControl('',[Validators.required]);
        let nome = new FormControl('',[Validators.required,CustomValidators.rangeLength([2,150])]);

        this.cadastroForm = this.fb.group({
            name:nome,
            email:['',[Validators.required,Validators.email]],
            cpf:['',[Validators.required,NgBrazilValidators.cpf]],
            dateBirth:['',[Validators.required]],
            city:['',[Validators.required]],
            zipCode:cep,
            state:['',[Validators.required]]
        })
    }

    ngAfterViewInit(): void {
        let controlBlurs: Observable<any>[] = this.formInputElements
        .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));
    
        merge(...controlBlurs).subscribe(() => {
          this.displayMessage = this.genericValidator.processarMensagens(this.cadastroForm);
        });
      }

    adicionarUsuario(){
        if(this.cadastroForm.dirty && this.cadastroForm.valid){
            this.usuario = Object.assign({},this.usuario,this.cadastroForm.value);
            this.usuarioService.registrarUsuario(this.usuario)
                .subscribe(
                        sucesso =>{this.processarSucesso(sucesso)},
                        falha=> {this.processarFalha(falha)}

                );
        }
    }

    processarSucesso(response: any){
      
        this.cadastroForm.reset();
        this.errors=[];
        let toast =  this.toastr.success('Registro realizado com Sucesso!', 'Sucesso',{
            timeOut:2000
        });
        if (toast) {
            toast.onHidden.subscribe(() => {
              this.router.navigate(['/listar-todos']);
            });
          }
    }
    processarFalha(fail:any){
            this.errors = fail.error.errors;
            this.toastr.error('Ocorreu um erro!', 'Opa:(');
    }
}