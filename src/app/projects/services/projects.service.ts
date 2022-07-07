import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StateProject } from 'src/app/core/enums/state-project.enum';
import { Project } from 'src/app/core/models/project';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private collection$: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([]);
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.refreshCollection();
  }

  public get collection(): BehaviorSubject<Project[]> {
    return this.collection$;
  }

  public set collection(col: BehaviorSubject<Project[]>) {
    this.collection$ = col;
  }
  public refreshCollection(){
    this.http.get<Project[]>(`${this.urlApi}/projects`).subscribe(data => {
      this.collection$.next(data);
    });
  }

  // change state
  public changeItem(item:Project, state: StateProject): Observable<Project> {
    //item.state = state; on ne modifie pas l'item en front avant que le back l'ai modifié
    //return this.update(item);
    const obj = {...item}; //spread = destructuration
    obj.state = state;
    return this.update(obj);
  }

  // update item in collection
  /*public update(item:Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlApi}/clients/${item.id}`, item);
  }*/
  public update(item:Project): Observable<Project> {
    return this.http.put<Project>(`${this.urlApi}/projects/${item.id}`, item).pipe(
      tap((res) => {
        //console.log(res);
        //si tout est ok on rappelle les data avant d'envoyer le retour au front
        this.refreshCollection();
      })
    );
  }

  // add item in collection
  public add(item: Project): Observable<Project> {
    return this.http.post<Project>(`${this.urlApi}/projects/`, item).pipe(
      tap((res) => {
        //console.log(res);
        //si tout est ok on rappelle les data avant d'envoyer le retour au front
        this.refreshCollection();

      })
    );
  }
  // delete item in collection
  public deleteItem(id:Number): Observable<Project> {
    return this.http.delete<Project>(`${this.urlApi}/projects/${id}`).pipe(
      tap((res) => {
        //console.log(res);
        //si tout est ok on rappelle les data avant d'envoyer le retour au front
        this.refreshCollection();
      })
    );;
  }
  // get item by id from collection
  public getItemById(id: Number): Observable<Project> {
    //pipe rxjs -> logique dans le composant
    return this.http.get<Project>(`${this.urlApi}/projects/${id}`)
  }
}
