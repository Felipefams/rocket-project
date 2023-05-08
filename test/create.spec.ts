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

// this is for auto mocking

// jest.mock("../src/service/RocketService");
// jest.mock("../src/service/LaunchService");
// jest.mock("../src/service/CrewService");
// jest.mock("../src/service/CrewmanService");

// jest.mock("../src/repository/RocketRepository");
// jest.mock("../src/repository/LaunchRepository");
// jest.mock("../src/repository/CrewRepository");
// jest.mock("../src/repository/CrewmanRepository");


describe("All create tests", () => {
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

});

describe("All getById tests", () => {

    it("Should get a Rocket by ID", async () => {
        //creates a fake repository
        const rocketRepositoryMock = new RocketRepository(Rocket);
        rocketRepositoryMock.getById = jest.fn().mockResolvedValue(rocket);

        //creates a real service based on the fake repository
        const rocketServiceMock = new RocketService(rocketRepositoryMock);

        const result = await rocketServiceMock.getById(rocket.id);

        expect(result).toEqual(rocket);
    });

    it("should getById a new launch", async () => {
        //creates a fake repository
        const launchRepositoryMock = new LaunchRepository(Launch);
        launchRepositoryMock.getById = jest.fn().mockResolvedValue(launch);

        //creates a real service based on the fake repository
        const launchServiceMock = new LaunchService(launchRepositoryMock);

        const result = await launchServiceMock.getById(launch.id);
        return expect(result).toEqual(launch);
    });

    it("should getById a new crew", async () => {
        //creates a fake repository
        const crewRepositoryMock = new CrewRepository(Crew);
        crewRepositoryMock.getById = jest.fn().mockResolvedValue(crew);

        //creates a real service based on the fake repository
        const crewServiceMock = new CrewService(crewRepositoryMock);

        const result = await crewServiceMock.getById(crew.id);
        return expect(result).toEqual(crew);
    });

    it("should getById a new crewman", async () => {
        //creates a fake repository
        const crewmanRepositoryMock = new CrewmanRepository(Crewman);
        crewmanRepositoryMock.getById = jest.fn().mockResolvedValue(crewman);

        //creates a real service based on the fake repository
        const crewmanServiceMock = new CrewmanService(crewmanRepositoryMock);

        const result = await crewmanServiceMock.getById(crewman.id);
        return expect(result).toEqual(crewman);
    });

});
