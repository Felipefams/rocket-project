import Crew from "../model/Crew";
import { CrewManDTO } from "./CrewmanDTO";

export class CrewDTO{
  id: number;
  name: string;
  crewman: CrewManDTO[];

  constructor(crew: Crew){
    this.id = crew.id;
    this.name = crew.name;
    this.crewman = crew.crewman;
  } 
}