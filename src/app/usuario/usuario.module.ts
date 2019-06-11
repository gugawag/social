import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import {AppMaterialModule} from '../shared/app-material-module';
import {UsuarioService} from '../shared/services/usuario-service.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    HttpClientModule
  ],
  providers: [
    UsuarioService
  ]
})
export class UsuarioModule { }
