import Launch from "../model/Launch";
import { CrewDTO } from "./CrewDTO";
import { RocketDTO } from "./RocketDTO";

export class LaunchDTO {
  id?: number;
  launchCode?: number;
  date?: string;
  success?: boolean;
  rocket?: RocketDTO;
  crew?: CrewDTO;

  constructor(launch: Launch) {
    this.id = launch.id;
    this.launchCode = launch.launchCode;
    this.date = launch.date;
    this.success = launch.success;
    this.rocket = launch.rocket;
    this.crew = launch.crew;
  }
}
