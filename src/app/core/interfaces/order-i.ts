import { stateOrder } from "../enums/state-order.enum";

export interface OrderI {
  tjmHt: number;
  nbJours: number;
  tva: number;
  state: stateOrder;
  typePresta: string;
  client: string;
  comment: string;
  id: number;
}
