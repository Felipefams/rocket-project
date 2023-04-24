import {} from '../repository/crewRepository';
import Crew from '../model/Crew';
import { CrewRepository } from '../repository/crewRepository';
import { CrewRequest } from '../../types';
import { Crewman } from '../model/Crewman';

export const getAllCrews = async () => {
    return CrewRepository.getAllCrews();
}

export const createNewCrew = async (crew : Crew) => {
    return CrewRepository.createNewCrew(crew); 
}

export const getCrew = async (id : number) => { 
    return CrewRepository.getCrew(id); 
}

export const updateCrew = async (id : number, crew : Partial<Crew>) => {
    return CrewRepository.updateCrew(id, crew); 
}

export const deleteCrew = async ({id} : CrewRequest) => {
    return CrewRepository.deleteCrew(id); 
}