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

it("should getAll rocket", async () => {
    //getAlls a fake repository
    const rocketRepositoryMock = new RocketRepository(Rocket);
    rocketRepositoryMock.getAll = jest.fn().mockResolvedValue(rocket);

    //getAlls a real service based on the fake repository
    const rocketServiceMock = new RocketService(rocketRepositoryMock);

    const result = await rocketServiceMock.getAll();
    return expect(result).toEqual(rocket);
});

it("should getAll launch", async () => {
    //getAlls a fake repository
    const launchRepositoryMock = new LaunchRepository(Launch);
    launchRepositoryMock.getAll = jest.fn().mockResolvedValue(launch);

    //getAlls a real service based on the fake repository
    const launchServiceMock = new LaunchService(launchRepositoryMock);

    const result = await launchServiceMock.getAll();
    return expect(result).toEqual(launch);
});

it("should getAll crew", async () => {
    //getAlls a fake repository
    const crewRepositoryMock = new CrewRepository(Crew);
    crewRepositoryMock.getAll = jest.fn().mockResolvedValue(crew);

    //getAlls a real service based on the fake repository
    const crewServiceMock = new CrewService(crewRepositoryMock);

    const result = await crewServiceMock.getAll();
    return expect(result).toEqual(crew);
});

it("should getAll crewman", async () => {
    //getAlls a fake repository
    const crewmanRepositoryMock = new CrewmanRepository(Crewman);
    crewmanRepositoryMock.getAll = jest.fn().mockResolvedValue(crewman);

    //getAlls a real service based on the fake repository
    const crewmanServiceMock = new CrewmanService(crewmanRepositoryMock);

    const result = await crewmanServiceMock.getAll();
    return expect(result).toEqual(crewman);
});