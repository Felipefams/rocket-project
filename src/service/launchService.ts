import express, { response } from 'express';
import Launch from '../model/Launch';
import { LaunchRepository } from '../repository/launchRepository';

export const getAllLaunchs = async () => {
    return LaunchRepository.getAllLaunchs();
}

export const createNewLaunch = async (launch: Launch) => {
    return LaunchRepository.createNewLaunch(launch);
}

export const getLaunch = async (id: number) => {
    return LaunchRepository.getLaunch(id);
}

export const updateLaunch = async (id: number, launch : Launch) => {
    return LaunchRepository.updateLaunch(id, launch);
}

export const deleteLaunch = async (id : number) => {
    return LaunchRepository.deleteLaunch(id);
}