import { stateOrder } from "../enums/state-order.enum";
import { OrderI } from "../interfaces/order-i";

export class Order implements OrderI{
  tjmHt = 1200;
  nbJours = 1;
  tva = 20;
  state = stateOrder.OPTION;
  typePresta!: string;
  client!: string;
  comment!: string;
  id!: number;

  constructor(obj?: Partial<Order>){
    if(obj) {
      Object.assign(this, obj);
    }
  }
}
