import { Crew } from "../interfaces/crew";
import { Crewman } from "../interfaces/crewman";
import { Launch } from "../interfaces/launch";
import Rocket from "../interfaces/rocket";

export type Crudable = Rocket[] | Crew[] | Crewman[] | Launch[];