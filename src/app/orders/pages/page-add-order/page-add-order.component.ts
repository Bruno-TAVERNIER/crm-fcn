import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {

  public item = new Order();

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void { }

  public add(item: Order): void {
    this.orderService.add(item).subscribe((res) => {
      console.log(res);
      this.router.navigate(['orders']);
    });
  }

}
