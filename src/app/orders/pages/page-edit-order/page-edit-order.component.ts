import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {

  public item$!: Observable<Order>;

  constructor(private route: ActivatedRoute,
              private orderService: OrderService,
              private router: Router) {
    //récupération de l'id dans la route
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.item$ = this.orderService.getItemById(id);
    });
  }

  ngOnInit(): void { }

  public edit(item: Order): void {
    this.orderService.update(item).subscribe((res) => {
      console.log(res);
      // retour à la liste
      this.router.navigate(['orders']);
    });
  }

}
