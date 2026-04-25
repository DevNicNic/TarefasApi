import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Importe da lista que eu criei
import { TarefaListaComponent } from './tarefa-lista/tarefa-lista';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TarefaListaComponent], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'tarefas-front';
}
