import Rocket from "../model/Rocket";

export class RocketDTO {
  id: number;
  name: string;

  constructor(rocket: Rocket) {
    this.id = rocket.id;
    this.name = rocket.name;
  }
}