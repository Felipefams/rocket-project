import { RocketRepository } from '../repository/rocketRepository';
import Rocket from "../model/Rocket"

export const getAllRockets = async () => {
    return RocketRepository.getAllRockets(); 
}

export const createNewRocket = async (rocket: Rocket) => {
    return RocketRepository.createNewRocket(rocket); 
}

export const getRocket = async (id: number) => { 
    return RocketRepository.getRocket(id);
}

export const updateRocket = async (id: number, rocket: Rocket) => {
    return RocketRepository.updateRocket(id, rocket); 
}

export const deleteRocket = async (id: number) => {
    return RocketRepository.deleteRocket(id); 
}