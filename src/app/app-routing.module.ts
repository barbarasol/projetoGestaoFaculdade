import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { HomeComponent } from './home/home.component';
import { ProfessorComponent } from './professor/professor.component';

const routes: Routes = [
  { path: 'aluno', loadChildren: () => import('./aluno/aluno.module').then(mod => mod.AlunoModule) },
  { path: 'professor', component: ProfessorComponent },
  { path: 'disciplina', component: DisciplinaComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
