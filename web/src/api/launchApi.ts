import { Launch } from "../interfaces/launch";

export const getAllLaunch = async () => {
    //todo fix these errors on the backend, i must send the dto instead of the entity itself
    try {
        const response = await fetch("http://localhost:8080/launch");
        if (!response.ok) throw new Error(response.statusText);
        const jsonData: Launch[] = await response.json();
        jsonData.map(x => {
            x.crew = x.crew?.id;
            x.rocket = x.rocket?.id;
        })
        return jsonData;
    } catch (error) {
        console.log(error);
    }
};