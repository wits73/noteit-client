import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notebook } from './../notes/model/notebook';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://localhost:3000/api';
  private ALL_NOTEBOOKS_URL = `${this.BASE_URL}\\notebook`;
  private DELETE_NOTEBOOK_URL = `${this.BASE_URL}\\notebook\\`;
  private CREATE_NOTEBOOK = `${this.BASE_URL}\\notebook`;
  private UPDATE_NOTEBOOK = `${this.BASE_URL}\\notebook\\`;

  constructor(private http: HttpClient) { }

  getAllNotebooks(): Observable<Notebook[]> {
    console.log(this.ALL_NOTEBOOKS_URL);
    return this.http.get<Notebook[]>(this.ALL_NOTEBOOKS_URL);
  }

  deleteNotebook(id: string): Observable<any> {
    console.log('id:', id);
    return this.http.delete(this.DELETE_NOTEBOOK_URL + id);
  }

  createNotebook(notebook: Notebook): Observable<Notebook> {
    return this.http.post<Notebook>(this.CREATE_NOTEBOOK, notebook);
  }

  updateNotebook(notebook: Notebook): Observable<Notebook> {
    return this.http.put<Notebook>(this.UPDATE_NOTEBOOK + notebook._id, notebook);
  }
}
