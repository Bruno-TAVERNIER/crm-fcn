import { StateProject } from "../enums/state-project.enum";
import { ProjectI } from "../interfaces/project-i";

export class Project implements ProjectI {
  state = StateProject.WAITING;
  name!: string;
  dteDeb!: Date;
  dteFin!: Date;
  budget = 0;
  manager!: string;
  client!: string;
  comment!: string;
  id!: number;

  constructor(obj?: Partial<Project>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
