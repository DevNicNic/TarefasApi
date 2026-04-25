import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from '../tarefas'; 

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  //  URL DA API 
  private apiUrl = 'http://localhost:5250/api/tarefas';
 

  constructor(private http: HttpClient) { }

  //  "GET" para listar 
  getTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.apiUrl);
  }

  //  "POST" para criar
  addTarefa(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.apiUrl, tarefa);
  }

  //  "DELETE" para excluir
  deleteTarefa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
