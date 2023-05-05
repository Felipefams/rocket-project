import AppDataSource from "../data-source";
import Rocket from "../model/Rocket";
import { BaseRepository } from "./interfaces/BaseRepository";

export class RocketRepository extends BaseRepository<Rocket>{
    protected readonly repository = AppDataSource.getRepository(Rocket);
}