import Crew from '../model/Crew';
import AppDataSource from '../data-source';
import { CrewRequest } from '../../types';

export const CrewRepository = AppDataSource.getRepository(Crew).extend({

    async getAllCrews() {
        return AppDataSource
            .getRepository(Crew)
            .find()
    },

    async createNewCrew(crew: Crew) {
        return AppDataSource
            .getRepository(Crew)
            .insert(crew)
    },

    async getCrew({id}: CrewRequest) {
        return AppDataSource
            .getRepository(Crew)
            .findBy({
                id: id,
            },
            )
    },

    async updateCrew({ id, name }: CrewRequest) {
        return AppDataSource
            .getRepository(Crew)
            .update(id, { name: name })
    },

    async deleteCrew(id: number) {
        return AppDataSource
            .getRepository(Crew)
            .delete(id)
    }

})