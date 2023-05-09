import { Crewman } from "../model/Crewman"
import AppDataSource from '../data-source';
import { BaseRepository, IBaseRepository } from "./interfaces/BaseRepository";

export class CrewmanRepository extends BaseRepository<Crewman>{ 
    protected readonly repository = AppDataSource.getRepository(Crewman);
}