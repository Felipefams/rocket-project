import { Crewman } from "../model/Crewman"
import { CrewmanRepository } from "../repository/crewmanRepository";

export const getAllCrewmen = async () => {
    return CrewmanRepository.getAllCrewmen();
}

export const createNewCrewman = async (crewman: Partial<Crewman>) => {
    return CrewmanRepository.createNewCrewman(crewman);
}

export const getCrewman = async (id: number) => {
    const crew = await CrewmanRepository.getCrewman(id);

    //todo melhorar esse tratamento
    if (crew == null || crew == undefined) throw new Error("cant find user with id " + id);

    return crew;
}

export const updateCrewman = async (id: number, crewman: Partial<Crewman>) => {
    const crew = await CrewmanRepository.updateCrewman(id, crewman);
    if (crew == null || crew == undefined) throw new Error("cant find user with id " + id);
    return crew;
}

export const deleteCrewman = async (id: number) => {
    const crew = await CrewmanRepository.getCrewman(id);
    if (crew == null || crew == undefined) throw new Error("cant find user with id " + id);

    return CrewmanRepository.deleteCrewman(id);
}