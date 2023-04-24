import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Launch from "./Launch";

@Entity("rocket")
export class Rocket{
    @PrimaryGeneratedColumn()
    id : number; 

    @Column()
    name : string; 

    constructor(name : string){
        this.name = name;
    }
}

export default Rocket;