import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CadastroComponent} from './usuario/cadastro/cadastro.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'usuario/cadastro',
        component: CadastroComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
