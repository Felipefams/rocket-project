import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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