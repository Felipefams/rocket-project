import express, { response } from 'express';
import { Endpoints } from '../enums';
import { mountEndpoint, mountEndpointWithId } from '../utils/stringUtils';
import AppDataSource from '../data-source';
import Rocket from '../model/Rocket';
import { RocketRequest } from '../../types';

export const RocketRepository = AppDataSource.getRepository(Rocket).extend({

    async getAllRockets() {
        return RocketRepository.find()
    },

    async createNewRocket(rocket: Rocket) {
        return RocketRepository.insert(rocket)
    },

    async getRocket(id: number) {
        return RocketRepository.findOneBy({ id: id })
    },

    async updateRocket(id: number, data: Partial<Rocket>) {
        return RocketRepository.update({ id }, data)
    },

    async deleteRocket(id: number) {
        return RocketRepository.delete(id)
    }
})
