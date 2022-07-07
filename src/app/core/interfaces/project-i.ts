import { StateProject } from "../enums/state-project.enum";

export interface ProjectI {
  state: StateProject,
  name: string,
  dteDeb: Date,
  dteFin: Date,
  budget: number,
  manager: string,
  client: string,
  comment: string,
  id: number
}
