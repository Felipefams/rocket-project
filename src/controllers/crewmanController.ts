import { Crewman } from '../model/Crewman';
import { CrewmanService } from '../service/CrewmanService';
import { BaseController } from './interfaces/BaseController';

export class CrewmanController extends BaseController<Crewman>{
    private readonly CrewmanService = new CrewmanService();
}