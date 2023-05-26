import { Crewman } from "./crewman";

export interface Crew{
    id?: number;
    name?: string;
    crewman?: Crewman[] | number[]; 
}