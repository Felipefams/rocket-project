import Crew from "../model/Crew";
import { CrewService } from "../service/CrewService";
import { BaseController } from "./interfaces/BaseController";

export class CrewController extends BaseController<Crew>{
    protected readonly service = new CrewService();
}