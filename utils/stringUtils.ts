import { Endpoints } from "../enums"
const base = process.env.LOCAL_BASE_URL;

//todo refatorar pra ficar compativel com sobrecarga
export function mountEndpoint(endpoint: Endpoints) {
    return `${base}/${Endpoints[endpoint]}`;
}

export const mountEndpointWithId = (endpoint: Endpoints, id: number | string) => {
    return `${mountEndpoint(endpoint)}/${id.toString()}`;
}
