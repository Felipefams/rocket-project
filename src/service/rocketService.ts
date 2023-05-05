import Rocket from "../model/Rocket";
import { RocketRepository } from "../repository/RocketRepository";
import { BaseService } from "./interfaces/BaseService";

export class RocketService extends BaseService<Rocket>{
    protected readonly repository = new RocketRepository();
}