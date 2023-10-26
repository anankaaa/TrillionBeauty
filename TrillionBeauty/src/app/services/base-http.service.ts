import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService<T extends { id: number }> {
  BASE_URL = 'http://localhost:3000/';

  constructor(public http: HttpClient, entityName: String) {
    this.BASE_URL += entityName;
  }

  create(entity: T): Observable<T> {
    const entityObj = { ...entity, id: null };
    return this.http.post<T>(`${this.BASE_URL}`, entityObj);
  }

  get(id: number): Observable<T> {
    return this.http.get<T>(`${this.BASE_URL}/${id}`);
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.BASE_URL}`);
  }

  update(entity: T): Observable<T> {
    return this.http.patch<T>(`${this.BASE_URL}/${entity.id}`, entity);
  }

  delete(entity: T): Observable<T> {
    return this.http.delete<T>(`${this.BASE_URL}/${entity.id}`);
  }
}
