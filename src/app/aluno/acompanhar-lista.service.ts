import { Injectable } from '@angular/core';
import { Aluno } from '../shared/aluno';

@Injectable({
  providedIn: 'root'
})
export class AcompanharListaService {

  constructor() { }

  salvar (alunos: any){
    window.localStorage.setItem('Alunos', JSON.stringify(alunos));
  }

  obterDados(){
    if (localStorage.length>0){
      const alunos = 'Alunos'
      const busca = JSON.parse(JSON.stringify(window.localStorage.getItem(alunos)));
      const dados = JSON.parse(busca)
      return dados;
    }
    return [];
  }
}
