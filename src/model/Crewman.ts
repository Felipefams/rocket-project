import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import Crew from "./Crew";

@Entity("crewman")
class Crewman{
    @PrimaryGeneratedColumn()
    id: number;   

    @Column()
    name: string;

    @Column()
    patent: string;

    @ManyToMany(() => Crew)
    @JoinTable({name:"crew_crewman"})
    crew: Crew[];

    constructor(id: number, name: string, patent: string){
        this.name = name;
        this.id = id;
        this.patent = patent;
    }
}

export default Crewman;