import { Crewman } from "../interfaces/crewman";
import { localhost } from "../routes/base-url";

export const getAllCrewman = async () => {
    try {
        const response = await fetch(`${localhost}/crewman`);
        if (!response.ok) throw new Error(response.statusText);
        const jsonData: Crewman[] = await response.json();
        return jsonData;
    } catch (error) {
        console.log(error);
    }
};

export async function createCrewman(data: Crewman){
    try {
        const response = await fetch(`${localhost}/Crewman`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error(response.statusText);
        const jsonData: Crewman = await response.json();
        return jsonData;
    } catch (error) {
        console.error(error);
    }
}

export async function updateCrewman(data: Crewman){
    try {
        const response = await fetch(`${localhost}/Crewman/${data.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error(response.statusText);
        const jsonData: Crewman = await response.json();
        return jsonData;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteCrewman(id: number){
    try {
        const response = await fetch(`${localhost}/Crewman/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) throw new Error(response.statusText);
        const jsonData: Crewman = await response.json();
        return jsonData;
    } catch (error) {
        console.error(error);
    }
}