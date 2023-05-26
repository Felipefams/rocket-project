import { Crewman } from "../interfaces/crewman";

export const getAllCrewman = async () => {
    try {
        const response = await fetch("http://localhost:8080/crewman");
        if (!response.ok) throw new Error(response.statusText);
        const jsonData: Crewman[] = await response.json();
        return jsonData;
    } catch (error) {
        console.log(error);
    }
};