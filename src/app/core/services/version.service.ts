import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VersionService {

  /* par définition, les collections s'écrivent avec un $ terminal */
  public version$ = new BehaviorSubject(1);

  constructor() { }

  // incrément de la version
  public incrementVersion(): void {
    this.version$.next(this.version$.value + 1);
    //console.log(this.version$.value);
  }
}

/* dans la famille RXJS (Réactive JS) => asynchrone :
- Observable: idée d'une collection invocable de valeurs ou d'évènements futurs.
- Observer: collection de callbacks qui sait écouter les valeurs délivrées par l'observable.
- Subscription: exécution d'un observable. utile pour annuler l'exécution.
- Opérators: fonctions pour traiter les collections (map, filter, concat, reduce, ...)
- Subject: Equivalent à un EventEmitter pour multicaster une valeur à plusieurs observateurs.
*/
