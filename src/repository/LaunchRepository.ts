import AppDataSource from '../data-source';
import Launch from '../model/Launch';
import { BaseRepository } from './interfaces/BaseRepository';

export class LaunchRepository extends BaseRepository<Launch>{
    protected readonly repository = AppDataSource.getRepository(Launch);
}