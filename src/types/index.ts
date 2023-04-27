import Crew from "../model/Crew";
import {Crewman} from "../model/Crewman";
import Rocket from "../model/Rocket";

export type CrewRequest = {
    id? : number;
    name? : string;
    crewman? : Crewman | Crewman[];
}

export type CrewmanRequest = {
    id? : number;
    name? : string;
    patent? : string;
    crew? : Crew | Crew[];
}

export type RocketRequest = {
    id? : number;
    name? : string;
}

export type LaunchRequest = {
    id? : number;
    launchCode? : number;
    date? : string;
    success? : boolean;
    rocket? : Rocket;
    crew? : Crew;
}