import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  public collection!: Order[];
  public headers: string[];
  constructor(private OrderService: OrderService) {
    this.OrderService.collection.subscribe((data) => {
      this.collection = data;
    });
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



}
