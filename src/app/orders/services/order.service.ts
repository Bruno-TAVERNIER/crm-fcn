import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Order } from 'src/app/core/models/order';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { stateOrder } from 'src/app/core/enums/state-order.enum';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  //private collection
  //private collection$!: Observable<Order[]>;
  private collection$: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([]);
  //url api
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    //this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`);
    this.refreshCollection();
  }

  private refreshCollection() {
    this.http.get<Order[]>(`${this.urlApi}/Orders`).subscribe((data) => {
      this.collection$.next(data);
    });
  }

  //get collection
  //public get collection(): Observable<Order[]> {
    public get collection(): BehaviorSubject<Order[]> {
    return this.collection$;
  }
  //set collection
 // public set collection(col: Observable<Order[]>) {
  public set collection(col: BehaviorSubject<Order[]>) {
    this.collection$ = col;
  }
  //change state
  public changeItem(item: Order, state: stateOrder){
    const obj = {...item};
    obj.state = state;
    return this.update(obj);
  }
  //update item in collection
  public update(item: Order): Observable<Order> {
    //return this.http.put<Order>(`${this.urlApi}/Orders/${item.id}`, item);
    // pipe permet d'effectuer des opérations sur un observable et retourner un observable
    return this.http.put<Order>(`${this.urlApi}/orders`, item).pipe(
      //tap permet d'inspecter un observable sans le modifier
      tap((res) => {
        //traiter les erreurs éventuelles de l'API et si tout est ok
        this.refreshCollection();
      })
    );
  }

  //add item in collection
  public add(item: Order): Observable<Order> {
    //return this.http.post<Order>(`${this.urlApi}/orders`, item);
    return this.http.post<Order>(`${this.urlApi}/orders`, item).pipe(
      tap((res) => {
        //traiter si besoin les erreurs api
        this.refreshCollection();
      })
    );
  }

  //delete item in collection
  public deleteItem(id: number): Observable<Order> {
    return this.http.delete<Order>(`${this.urlApi}/orders/${id}`).pipe(
      tap((res) => {
        this.refreshCollection();
      })
    );
  }

  //get item by id from collection
  public getItemById(id: number){
    return this.http.get<Order>(`${this.urlApi}/orders/${id}`);
  }
}
