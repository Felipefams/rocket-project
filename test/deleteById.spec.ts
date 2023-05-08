import Crew from "../src/model/Crew";
import Crewman from "../src/model/Crewman";
import Launch from "../src/model/Launch";
import Rocket from "../src/model/Rocket";
import { CrewRepository } from "../src/repository/CrewRepository";
import { CrewmanRepository } from "../src/repository/CrewmanRepository";
import { LaunchRepository } from "../src/repository/LaunchRepository";
import { RocketRepository } from "../src/repository/RocketRepository";
import { CrewService } from "../src/service/CrewService";
import { CrewmanService } from "../src/service/CrewmanService";
import { LaunchService } from "../src/service/LaunchService";
import { RocketService } from "../src/service/RocketService";
import { crew, crewman, launch, rocket } from "./mockEntities";


describe("All deleteById tests", () => {
    
    it("Should delete a Rocket by ID", async () => {
        //creates a fake repository
        const rocketRepositoryMock = new RocketRepository(Rocket);
        rocketRepositoryMock.deleteById = jest.fn().mockResolvedValue(rocket);

        //creates a real service based on the fake repository
        const rocketServiceMock = new RocketService(rocketRepositoryMock);

        const result = await rocketServiceMock.deleteById(rocket.id);

        expect(result).toEqual(rocket);
    });

    it("should deleteById a new launch", async () => {
        //creates a fake repository
        const launchRepositoryMock = new LaunchRepository(Launch);
        launchRepositoryMock.deleteById = jest.fn().mockResolvedValue(launch);

        //creates a real service based on the fake repository
        const launchServiceMock = new LaunchService(launchRepositoryMock);

        const result = await launchServiceMock.deleteById(launch.id);
        return expect(result).toEqual(launch);
    });

    it("should deleteById a new crew", async () => {
        //creates a fake repository
        const crewRepositoryMock = new CrewRepository(Crew);
        crewRepositoryMock.deleteById = jest.fn().mockResolvedValue(crew);

        //creates a real service based on the fake repository
        const crewServiceMock = new CrewService(crewRepositoryMock);

        const result = await crewServiceMock.deleteById(crew.id);
        return expect(result).toEqual(crew);
    });

    it("should deleteById a new crewman", async () => {
        //creates a fake repository
        const crewmanRepositoryMock = new CrewmanRepository(Crewman);
        crewmanRepositoryMock.deleteById = jest.fn().mockResolvedValue(crewman);

        //creates a real service based on the fake repository
        const crewmanServiceMock = new CrewmanService(crewmanRepositoryMock);

        const result = await crewmanServiceMock.deleteById(crewman.id);
        return expect(result).toEqual(crewman);
    });

});