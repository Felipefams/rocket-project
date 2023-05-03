import { Crewman } from "../model/Crewman"
import AppDataSource from '../data-source';
import { BaseRepository } from "./interfaces/BaseRepository";

export class CrewmanRepository implements BaseRepository<Crewman>{ 
    private readonly repository = AppDataSource.getRepository(Crewman);

    async getAll() : Promise<Crewman[]>{
        return await this.repository.find();
    }

    async getById(id: number): Promise<Crewman> {
        const crewman = await this.repository.findOne({ where: { id: id } }); 
        return crewman;
    }

    async create(crewman: Partial<Crewman>): Promise<Crewman> {
        const newCrewman = this.repository.create(crewman);
        await this.repository.save(crewman);
        return newCrewman;
    }

    async update(id: number, crewman: Partial<Crewman>): Promise<Crewman> {
        await this.repository.update(id , crewman);
        return await this.repository.findOne({ where: { id: id } });
    }
    async deleteById(id: number): Promise<Crewman> {
        const crewmanToBeDeleted = this.getById(id);
        await this.repository.delete( id );
        return crewmanToBeDeleted;
    } 


}

// export const CrewmanRepository = AppDataSource.getRepository(Crewman).extend({

//     async getAllCrewmen() {
//         return await CrewmanRepository.find();
//     },
//     async createNewCrewman(crew: Partial<Crewman>) {
//         const crewman = CrewmanRepository.create(crew);
//         await CrewmanRepository.save(crew);
//         return crewman;
//     },

//     async getCrewman(id: number) {
//         const crew = await CrewmanRepository.findOne({ where: { id: id } }); 
//         return crew;
//     },

//     async updateCrewman(id: number, crew: Partial<Crewman>) {
//         await CrewmanRepository.update(id , crew);
//         return await CrewmanRepository.findOne({ where: { id: id } });
//     },

//     async deleteCrewman(id: number) { 
//         return await CrewmanRepository.delete( id );
//     },
// })