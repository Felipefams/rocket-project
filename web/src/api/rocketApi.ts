import { Rocket } from "../interfaces/rocket";

export const getAllRockets = async () => {
    try {
        const response = await fetch("http://localhost:8080/rocket");
        if (!response.ok) throw new Error(response.statusText);
        const jsonData: Rocket[] = await response.json();
        return jsonData;
    } catch (error) {
        console.log(error);
    }
};