import express, { response } from 'express';
import { Endpoints } from '../enums';
import { mountEndpoint, mountEndpointWithId } from '../utils/stringUtils';
import AppDataSource from '../data-source';
import Launch from '../model/Launch';

export const LaunchRepository = AppDataSource.getRepository(Launch).extend({

    async getAllLaunchs() {
        return await LaunchRepository.find();
    },
    async getLaunch(id: number) {
        return await LaunchRepository.findOne({ where: { id: id } });
    },
    async createNewLaunch(launch: Launch) {
        const newLaunch = LaunchRepository.create(launch);
        await LaunchRepository.save(launch);
        return newLaunch;
    },

    async updateLaunch(id: number, launch: Partial<Launch>) {
        // const newLaunch = await LaunchRepository.getLaunch(id);
        // Object.assign(newLaunch, launch);
        // await LaunchRepository.save(newLaunch);
        await LaunchRepository.update({ id }, launch);
        return await LaunchRepository.getLaunch(id);
    },

    async deleteLaunch(id: number) {
        return await LaunchRepository.delete(id);
    }
})