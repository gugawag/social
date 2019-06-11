import {Component, OnInit} from '@angular/core';
import {Usuario} from '../../shared/model/usuario';
import {UsuarioService} from '../../shared/services/usuario-service.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = new Usuario();
  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit() {
    this.listar();
  }

  cadastrar() {
    this.usuarioService.cadastrar(this.usuario).subscribe(
      usuario => {
        this.usuario = new Usuario();
        this.usuarios.push(usuario);
      },
      erro => {
        console.log(erro);
      }
    );
  }

  listar() {
    this.usuarioService.listar().subscribe(
      usuarios => {
        this.usuarios = usuarios;
      }
    );
  }

}
