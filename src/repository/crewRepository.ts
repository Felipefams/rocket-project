import Crew from '../model/Crew';
import AppDataSource from '../data-source';
import { CrewRequest } from '../types';

export const CrewRepository = AppDataSource.getRepository(Crew).extend({

    async getAllCrews() {
        return await CrewRepository.find()
    },

    async createNewCrew(crew: Crew) {
        return await CrewRepository.save(CrewRepository.create(crew));
    },

    async getCrew(id: number) {
        return await CrewRepository.findOneBy({ id: id })
    },

    async updateCrew(id: number, crew: Partial<Crew>) {
        const newCrew = await CrewRepository.getCrew(id);
        Object.assign(newCrew, crew);
        await CrewRepository.save(newCrew);

        return await CrewRepository.findOne({ where: { id: id } });
    },

    async deleteCrew(id: number) {
        return await CrewRepository.delete(id)
    }

})