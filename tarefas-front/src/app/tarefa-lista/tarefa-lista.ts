import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; //  Import
import { TarefasService } from '../services/tarefas';
import { Tarefa } from '../tarefas';

@Component({
  selector: 'app-tarefa-lista',
  standalone: true,
  imports: [CommonModule, FormsModule], //  Registro
  templateUrl: './tarefa-lista.html',
  styleUrl: './tarefa-lista.css'
})
export class TarefaListaComponent implements OnInit {
  tarefas: Tarefa[] = [];

  //  O objeto para o formulário e a função de salvar
  novaTarefa: any = { titulo: '', descricao: '', status: 'Pendente' };

  constructor(private tarefasService: TarefasService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.tarefasService.getTarefas().subscribe((dados) => {
      this.tarefas = dados;
    });
  }

  salvar() {
    if (this.novaTarefa.titulo) {
      this.tarefasService.addTarefa(this.novaTarefa).subscribe(() => {
        this.listar(); // Recarrega a tabela na hora!
        this.novaTarefa = { titulo: '', descricao: '', status: 'Pendente' }; // Limpa os campos
      });
    }
  }

  excluir(id: number | undefined) {
    if (id) {
      this.tarefasService.deleteTarefa(id).subscribe(() => {
        this.listar();
      });
    }
  }
}


