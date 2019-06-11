import {Injectable} from '@angular/core';
import {Usuario} from '../model/usuario';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  apiUsuario = 'http://localhost:3000/usuario';

  constructor(private http: HttpClient) {
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    console.log('Vou cadastrar:', usuario);
    return this.http.post<Usuario>(this.apiUsuario, usuario);
  }

  listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUsuario);
  }
}
