import { Crewman } from "../model/Crewman"
import { CrewmanRepository } from "../repository/CrewmanRepository";
import { BaseService } from "./interfaces/BaseService";

export class CrewmanService extends BaseService<Crewman>{
    protected readonly repository = new CrewmanRepository();
}