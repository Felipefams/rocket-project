import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import Crew from "./Crew";

@Entity("crewman")
export class Crewman{
    @PrimaryGeneratedColumn()
    id: number;   

    @Column()
    name: string;

    @Column()
    patent: string;

    constructor(name: string, patent: string){
        this.name = name;
        this.patent = patent;
    }
}

export default Crewman;