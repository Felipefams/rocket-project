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

it("should create a new rocket", async () => {
    //creates a fake repository
    const rocketRepositoryMock = new RocketRepository(Rocket);
    rocketRepositoryMock.create = jest.fn().mockResolvedValue(rocket);

    //creates a real service based on the fake repository
    const rocketServiceMock = new RocketService(rocketRepositoryMock);

    const result = await rocketServiceMock.create(rocket);
    return expect(result).toEqual(rocket);
});

it("should create a new launch", async () => {
    //creates a fake repository
    const launchRepositoryMock = new LaunchRepository(Launch);
    launchRepositoryMock.create = jest.fn().mockResolvedValue(launch);

    //creates a real service based on the fake repository
    const launchServiceMock = new LaunchService(launchRepositoryMock);

    const result = await launchServiceMock.create(launch);
    return expect(result).toEqual(launch);
});

it("should create a new crew", async () => {
    //creates a fake repository
    const crewRepositoryMock = new CrewRepository(Crew);
    crewRepositoryMock.create = jest.fn().mockResolvedValue(crew);

    //creates a real service based on the fake repository
    const crewServiceMock = new CrewService(crewRepositoryMock);

    const result = await crewServiceMock.create(crew);
    return expect(result).toEqual(crew);
});

it("should create a new crewman", async () => {
    //creates a fake repository
    const crewmanRepositoryMock = new CrewmanRepository(Crewman);
    crewmanRepositoryMock.create = jest.fn().mockResolvedValue(crewman);

    //creates a real service based on the fake repository
    const crewmanServiceMock = new CrewmanService(crewmanRepositoryMock);

    const result = await crewmanServiceMock.create(crewman);
    return expect(result).toEqual(crewman);
});