import { Crew } from "./crew";
import { Rocket } from "./rocket";

export interface Launch {
    id?: number;
    launchCode?: number;
    date?: string;
    success?: boolean;
    rocket?: Rocket | number[];
    crew?: Crew | number[];
}