import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Professor } from '../shared/professor';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  formularioProfessor!: FormGroup;
  professores!: Professor[];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formularioProfessor = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      sobrenome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      registro: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      graduacao: [null, Validators.required]
    })
  }

  onSubmit(){
    
  }
}
