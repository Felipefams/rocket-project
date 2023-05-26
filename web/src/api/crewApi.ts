import { Crew } from "../interfaces/crew";
import { localhost } from "../routes/base-url";

export async function getAllCrew() {
    try {
        const response = await fetch(`${localhost}/crew`);
        if (!response.ok) throw new Error(response.statusText);
        const jsonData: Crew[] = await response.json();
        jsonData.map((crew) => {
            crew.crewman = crew.crewman?.map(crewman => crewman.id);
        });
        return jsonData;
    } catch (error) {
        console.error(error);
    }
}

export async function createCrew(data: Crew){
    try {
        const response = await fetch(`${localhost}/crew`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error(response.statusText);
        const jsonData: Crew = await response.json();
        return jsonData;
    } catch (error) {
        console.error(error);
    }
}

export async function updateCrew(data: Crew){
    try {
        const response = await fetch(`${localhost}/crew/${data.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error(response.statusText);
        const jsonData: Crew = await response.json();
        return jsonData;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteCrew(id: number){
    try {
        const response = await fetch(`${localhost}/crew/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) throw new Error(response.statusText);
        const jsonData: Crew = await response.json();
        return jsonData;
    } catch (error) {
        console.error(error);
    }
}