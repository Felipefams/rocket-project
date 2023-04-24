import { Crewman } from "../model/Crewman"
import AppDataSource from '../data-source';
import { IsNull } from "typeorm";


export const CrewmanRepository = AppDataSource.getRepository(Crewman).extend({

    async getAllCrewmen() {
        return await CrewmanRepository.find();
    },
    async createNewCrewman(crew: Partial<Crewman>) {
        const crewman = CrewmanRepository.create(crew);
        await CrewmanRepository.save(crew);
        return crewman;
    },

    async getCrewman(id: number) {
        const crew = await CrewmanRepository.findOne({ where: { id: id } }); 
        return crew;
    },

    async updateCrewman(id: number, crew: Partial<Crewman>) {
        await CrewmanRepository.update(id , crew);
        return await CrewmanRepository.findOne({ where: { id: id } });
    },

    async deleteCrewman(id: number) { 
        return await CrewmanRepository.delete( id );
    },
})