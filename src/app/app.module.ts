import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfessorComponent } from './professor/professor.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { AlunoModule } from './aluno/aluno.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfessorCadastroComponent } from './professor/professor-cadastro/professor-cadastro.component';
import { ListaProfessoresComponent } from './professor/lista-professores/lista-professores.component';



@NgModule({
  declarations: [
    AppComponent,
    ProfessorComponent,
    DisciplinaComponent,
    ProfessorCadastroComponent,
    ListaProfessoresComponent
  ],
  imports: [
    BrowserModule,
    AlunoModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
