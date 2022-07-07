import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Manager } from 'src/app/core/models/manager';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManagersService {

  private collection$: BehaviorSubject<Manager[]> = new BehaviorSubject<Manager[]>([]);
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.refreshCollection();
   }

   public get collection(): BehaviorSubject<Manager[]> {
    return this.collection$;
   }
   public set collection(col: BehaviorSubject<Manager[]>) {
    this.collection$ = col;
   }
   public refreshCollection(){
    this.http.get<Manager[]>(`${this.urlApi}/managers`).subscribe(data => {
      this.collection$.next(data);
    });
   }
   //update item in collection
  public update(item: Manager): Observable<Manager> {
    return this.http.put<Manager>(`${this.urlApi}/managers/${item.id}`, item).pipe(
      tap((res) => {
        //traiter les erreurs éventuelles de l'API et si tout est ok
        this.refreshCollection();
      })
    );
  }

  //add item in collection
  public add(item: Manager): Observable<Manager> {
    return this.http.post<Manager>(`${this.urlApi}/managers`, item).pipe(
      tap((res) => {
        //traiter si besoin les erreurs api
        this.refreshCollection();
      })
    );
  }

  //delete item in collection
  public deleteItem(id: number): Observable<Manager> {
    return this.http.delete<Manager>(`${this.urlApi}/managers/${id}`).pipe(
      tap((res) => {
        this.refreshCollection();
      })
    );
  }

  //get item by id from collection
  public getItemById(id: number){
    return this.http.get<Manager>(`${this.urlApi}/managers/${id}`);
  }
}
