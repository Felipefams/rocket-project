import { Launch } from "../interfaces/launch";
import { localhost } from "../routes/base-url";

export const getAllLaunch = async () => {
    //todo fix these errors on the backend, i must send the dto instead of the entity itself
    try {
        const response = await fetch(`${localhost}/launch`);
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

export async function createLaunch(data: Launch){
    try {
        const response = await fetch(`${localhost}/launch`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error(response.statusText);
        const jsonData: Launch = await response.json();
        return jsonData;
    } catch (error) {
        console.error(error);
    }
}
export async function updateLaunch(data: Launch){
    try {
        const response = await fetch(`${localhost}/launch/${data.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error(response.statusText);
        const jsonData: Launch = await response.json();
        return jsonData;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteLaunch(id: number){
    try {
        const response = await fetch(`${localhost}/launch/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) throw new Error(response.statusText);
        const jsonData: Launch = await response.json();
        return jsonData;
    } catch (error) {
        console.error(error);
    }
}