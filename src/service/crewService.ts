import {} from '../repository/crewRepository';
import Crew from '../model/Crew';
import { CrewRepository } from '../repository/crewRepository';
import { CrewRequest } from '../../types';

export const getAllCrews = async () => {
    return CrewRepository.getAllCrews();
}

export const createNewCrew = async (crew : Crew) => {
    return CrewRepository.createNewCrew(crew); 
}

export const getCrew = async ({id} : CrewRequest) => { 
    return CrewRepository.getCrew({id}); 
}

export const updateCrew = async ({id, name} : CrewRequest) => {
    const crew = new Crew(name)

    return CrewRepository.updateCrew({id, name}); 
}

export const deleteCrew = async ({id} : CrewRequest) => {
    return CrewRepository.deleteCrew(id); 
}