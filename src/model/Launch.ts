import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Rocket from "./Rocket";
import Crew from "./Crew";

@Entity("launch")
class Launch{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    launchCode: number;

    @Column()
    date: string;

    @Column()
    success: boolean;

    @OneToOne(() => Rocket)
    @JoinColumn({name: "rocket_id"})
    rocket: Rocket;

    @OneToOne(() => Crew)
    @JoinColumn({name: "crew_id"})
    crew: Crew;

    constructor(launch: number, date: string, success: boolean, rocket: Rocket, crew: Crew){
        this.launchCode = launch;
        this.date =date;
        this.success = success;
        this.rocket = rocket;
        this.crew = crew;
    }
}


export default Launch;