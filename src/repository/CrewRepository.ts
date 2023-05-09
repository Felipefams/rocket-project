import Crew from '../model/Crew';
import AppDataSource from '../data-source';
import { BaseRepository, IBaseRepository } from './interfaces/BaseRepository';

export class CrewRepository extends BaseRepository<Crew>{
    protected readonly repository = AppDataSource.getRepository(Crew);
}