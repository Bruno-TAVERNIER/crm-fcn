import { ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client.enum';
import { Client } from 'src/app/core/models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  public collection$: Observable<Client[]>;
  public states = Object.values(StateClient);
  public headers: string[];
  constructor(private clientService: ClientService,
    private cd: ChangeDetectorRef,
    private router: Router) {
    this.collection$ = this.clientService.collection;
    this.headers = [
      'Actions',
      'Nom',
      'Total CA HT',
      'Taux TVA',
      'Total TTC',
      'Commentaire',
      'State'
    ];
  }

  ngOnInit(): void { }

  public changeState(item: Client, event: any): void {
    const state = event.target.value;
    this.clientService.changeItem(item, state).subscribe((data) => {
      //traiter les réponses de l'API
      item.state = data.state;
      // la référence d'item n'a pas changé donc change détection manuel
      this.cd.detectChanges();
    });
  }

  public goToEdit(id: number): void{
    this.router.navigate(['clients', 'edit', id]);
  }

  public deleteItem(id: number): void {
    this.clientService.deleteItem(id).subscribe();
    window.location.reload(); // beurk version à éviter
  }
}
