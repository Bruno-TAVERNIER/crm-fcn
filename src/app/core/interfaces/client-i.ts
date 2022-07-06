import { StateClient } from "../enums/state-client.enum";

export interface ClientI {
  state: StateClient;
  tva: number;
  id: number;
  nom: string;
  totalCaHt: number;
  comment: string;
}
