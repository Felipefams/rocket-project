import { Rocket } from "../interfaces/rocket";
import { localhost } from "../routes/base-url";

export const getAllRockets = async () => {
    try {
        const response = await fetch(`${localhost}/rocket`);
        if (!response.ok) throw new Error(response.statusText);
        const jsonData: Rocket[] = await response.json();
        return jsonData;
    } catch (error) {
        console.log(error);
    }
};

export async function createRocket(data: Rocket){
    try {
        const response = await fetch(`${localhost}/Rocket`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error(response.statusText);
        const jsonData: Rocket = await response.json();
        return jsonData;
    } catch (error) {
        console.error(error);
    }
}

export async function updateRocket(data: Rocket){
    try {
        const response = await fetch(`${localhost}/Rocket/${data.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error(response.statusText);
        const jsonData: Rocket = await response.json();
        return jsonData;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteRocket(id: number){
    try {
        const response = await fetch(`${localhost}/Rocket/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) throw new Error(response.statusText);
        const jsonData: Rocket = await response.json();
        return jsonData;
    } catch (error) {
        console.error(error);
    }
}