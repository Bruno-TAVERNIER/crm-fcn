import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StateClient } from 'src/app/core/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  //private collection
  private collection$!: Observable<Client[]>;
  //url api
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.urlApi}/clients`);
  }

  //get collection
  public get collection(): Observable<Client[]> {
    return this.collection$
  }
  //set collection
  public set collection(col: Observable<Client[]>) {
    this.collection$ = col;
  }
  //change state
  public changeItem(item: Client, state: StateClient){
    const obj = {...item};
    obj.state = state;
    return this.update(obj);
  }
  //update item in collection
  public update(item: Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlApi}/clients/${item.id}`, item);
  }

  //add item in collection
  public add(item: Client): Observable<Client> {
    return this.http.post<Client>(`${this.urlApi}/clients`, item);
  }

  //delete item in collection
  public deleteItem(id: number): Observable<Client> {
    return this.http.delete<Client>(`${this.urlApi}/clients/${id}`);
  }

  //get item by id from collection
  public getItemById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.urlApi}/clients/${id}`);
  }
}
