import Crew from "../model/Crew";
import { CrewManDTO } from "./CrewmanDTO";

export class CrewDTO{
  id: number;
  name: string;
  crewman: number[];

  constructor(crew: Crew){
    this.id = crew.id;
    this.name = crew.name;
    crew.crewman.forEach((crewman) => {
      this.crewman.push(crewman.id);
    });
  } 
}