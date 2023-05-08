import { CrewController } from "./controllers/CrewController";
import { CrewmanController } from "./controllers/CrewmanController";
import { LaunchController } from "./controllers/LaunchController";
import { RocketController } from "./controllers/RocketController";
import Crew from "./model/Crew";
import Crewman from "./model/Crewman";
import Launch from "./model/Launch";
import Rocket from "./model/Rocket";
import { CrewRepository } from "./repository/CrewRepository";
import { CrewmanRepository } from "./repository/CrewmanRepository";
import { LaunchRepository } from "./repository/LaunchRepository";
import { RocketRepository } from "./repository/RocketRepository";
import { CrewService } from "./service/CrewService";
import { CrewmanService } from "./service/CrewmanService";
import { LaunchService } from "./service/LaunchService";
import { RocketService } from "./service/RocketService";

export const crewRepository = new CrewRepository(Crew);
export const crewService = new CrewService(crewRepository);
export const crewController = new CrewController(crewService);

export const crewmanRepository = new CrewmanRepository(Crewman);
export const crewmanService = new CrewmanService(crewmanRepository);
export const crewmanController = new CrewmanController(crewmanService);

export const rocketRepository = new RocketRepository(Rocket);
export const rocketService = new RocketService(rocketRepository);
export const rocketController = new RocketController(rocketService);

export const launchRepository = new LaunchRepository(Launch);
export const launchService = new LaunchService(launchRepository);
export const launchController = new LaunchController(launchService);
