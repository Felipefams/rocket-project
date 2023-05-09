import Crewman from "../model/Crewman";

export class CrewManDTO {
  id?: number;
  name?: string;

  constructor(crewman: Crewman) {
    this.id = crewman.id;
    this.name = crewman.name;
  }
}