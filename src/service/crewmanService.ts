import { Crewman } from "../model/Crewman"
import { CrewmanRepository } from "../repository/CrewmanRepository";

export class CrewmanService {
    private readonly CrewmanRepository = new CrewmanRepository;

    getAllCrewman = async () => {
        return this.CrewmanRepository.getAll();
    }

    createCrewman = async (crewman: Partial<Crewman>) => {
        return this.CrewmanRepository.create(crewman);
    }


    getCrewmanById = async (id: number) => {
        const crew = await this.CrewmanRepository.getById(id);

        //todo melhorar esse tratamento
        if (crew == null || crew == undefined) throw new Error("cant find user with id " + id);

        return crew;
    }

    updateCrewman = async (id: number, crewman: Partial<Crewman>) => {
        const crew = await this.CrewmanRepository.update(id, crewman);
        if (crew == null || crew == undefined) throw new Error("cant find user with id " + id);
        return crew;
    }

    deleteCrewmanById = async (id: number) => {
        const crew = await this.CrewmanRepository.getById(id);
        if (crew == null || crew == undefined) throw new Error("cant find user with id " + id);

        return this.CrewmanRepository.deleteById(id);
    }

}