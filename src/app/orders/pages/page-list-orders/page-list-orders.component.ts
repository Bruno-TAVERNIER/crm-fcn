import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { stateOrder } from 'src/app/core/enums/state-order.enum';
import { Order } from 'src/app/core/models/order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  //public collection!: Order[];
  public collection$: Observable<Order[]>;
  public states = Object.values(stateOrder);
  public headers: string[];
  constructor(private OrderService: OrderService, private cd: ChangeDetectorRef) {
    /*this.OrderService.collection.subscribe((data) => {
      this.collection = data;
    });*/
    this.collection$ = this.OrderService.collection;
    this.headers = [
      'Type',
      'Client',
      'Taux TVA',
      'Nb Jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'Commentaire',
      'State'
    ];
  }

  ngOnInit(): void {}

  public changeState(item: Order, event: any): void {
    const state = event.target.value;
    this.OrderService.changeItem(item, state).subscribe((data) => {
      //traiter les réponses de l'API
      item.state = data.state;
      // la référence d'item n'a pas changé donc change détection manuel
      this.cd.detectChanges();
    });
  }
}
