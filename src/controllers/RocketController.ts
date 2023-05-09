import { rocketService } from "../controllerFactory";
import Rocket from "../model/Rocket";
import { RocketService } from "../service/RocketService";
import { BaseController } from "./interfaces/BaseController";

export class RocketController extends BaseController<Rocket>{
}