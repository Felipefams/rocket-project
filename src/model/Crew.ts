import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Crewman } from "./Crewman";

@Entity("crew")
export class Crew {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => Crewman, {eager: true})
    @JoinTable({ name: "crew_crewman" })
    crewman: Crewman[];

    constructor(name: string, crewman?: Crewman[]) {
        this.name = name;
        this.crewman = crewman;
    }

}
export default Crew;