
import { ManagerI } from "../interfaces/manager-i";

export class Manager implements ManagerI {
  id!: number;
  prenom!: string;
  nom!: string;

  constructor(obj?: Partial<Manager>) {
    if(obj) {
      Object.assign(this, obj);
    }
  }
}
