import {} from '../repository/CrewRepository';
import Crew from '../model/Crew';
import { CrewRepository } from '../repository/CrewRepository';
import { BaseRepository } from '../repository/interfaces/BaseRepository';
import { BaseService } from './interfaces/BaseService';

export class CrewService extends BaseService<Crew>{
    protected readonly repository = new CrewRepository();
}