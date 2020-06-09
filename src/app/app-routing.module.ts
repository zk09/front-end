import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { CadastroComponent } from './usuario/cadastro/cadastro.component';


const routes: Routes = [

  {path:'', redirectTo: '/home' , pathMatch: 'full'},
  {path:'home', component:HomeComponent} ,
  {path: 'cadastro', component: CadastroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
