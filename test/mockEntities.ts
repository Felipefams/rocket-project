import Crew from "../src/model/Crew";
import Crewman from "../src/model/Crewman";
import Launch from "../src/model/Launch";
import Rocket from "../src/model/Rocket";

export const rocket: Rocket = {
    id: 1,
    name: "Falcon 9",
};

export const crew: Crew = {
    id: 1,
    name: "Crew 1",
    crewman: [{ id: 1, name: "Crewman 1", patent: "Patent 1" }]
};

export const crewman: Crewman = {
    id: 1,
    name: "Crewman 1",
    patent: "Patent 1"
};

export const launch: Launch = {
    "id": 1,
    "launchCode": 1,
    "date": "2021-01-01",
    "success": true,
    "rocket": rocket,
    "crew": crew
}